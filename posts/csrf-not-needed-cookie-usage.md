---
title: "Spring SecurityでCSRF対策を導入しようとしたけど、実は不要だった話"
date: "2025-04-29"
---

今回はメモ程度にまとめていきます。  


これまで個人開発でReminderアプリの開発を行ってきました。そして最近、XSSやCSRF対策として、アクセストークンの保管場所や、Spring Securityの設定の見直しを行ってきました。その中で、Spring Securityが提供している機能を使用してCSRF対策を行っていたのですが、ReminderアプリではCSRF対策が不要と判断し、その実装を中止しました。  


## なぜCSRF対策を中止したのか？
Reminderアプリでは、JWTを使ったトークンベース認証を採用しており、
* アクセストークンは メモリ上（in-memory）
* リフレッシュトークンは HttpOnly Cookie  
で管理しています。
また、アプリは以下のように異なるドメイン構成でホストされています：
* フロントエンド：shibainuu.com
* バックエンド：api.shibainuu.com
この構成では、リフレッシュトークンを送信するためにCookieのSameSite属性をNoneに設定する必要があり、**「CSRF対策を入れなければ危険なのでは？」**と考え、導入を進めていました。
  
しかし、冷静にリクエストの流れを見直すと、Cookieが使われるのは次の2つのケースだけであることに気づきました：
* アクセストークンの再発行（POST /auth/token）
* ログアウト（POST /auth/logout）

　　
## 1. 攻撃者はリフレッシュトークンでアクセストークンを取得できるのか？
結論から言えば、取得できません。
攻撃者は確かに、ユーザーのブラウザに保存されたCookieを使って、POST /auth/token にリクエストを送ることは可能です（CSRF攻撃）。しかし、サーバ側のCORS設定（Access-Control-Allow-Originヘッダ）により正規のユーザーのみがレスポンスを受け取ることができます。つまり、攻撃者はアクセストークンを取得することができず、Cookieを不正利用してできることも限られていることから、CSRFへのリスクを許容しています。
　　
## 2. 攻撃者はリフレッシュトークンを使用してログアウトできるのか？
ログアウトは可能です。
攻撃者がCSRFを仕掛けることで、ユーザーを意図せず```POST /auth/logout```へ誘導し、システムからログアウトさせることができます。
ただし、これは再ログインすればすぐに復旧可能な被害であり、深刻なリスクにはつながらないと判断しました。

## 実際どのようなCSRF対策をしようとしていたか
以下のようにSpring Securityを使ってCSRF対策を導入していました。CSRFトークンを保管するCookie（HttpOnly: false）をクライアントに送信し、ブラウザに保存させます。そして、```POST /auth/token```などへのリクエスト時に、ヘッダに```X-CSRF-TOKEN```をセットして送信します。Spring Securityがそのトークンの有効性を調べることで、CSRF対策を行います。
　　
```
@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			// ...
			.csrf((csrf) -> csrf
				.csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
			);
		return http.build();
	}
}
```
[ソースコードの詳細はこちら（Spring Security公式ドキュメント）](https://spring.pleiades.io/spring-security/reference/servlet/exploits/csrf.html)

## 余談
[徳丸さんのスライド](https://blog.tokumaru.org/2022/09/super-introduction-to-spa.html)にもあるように、基本的にはCSRF対策としてフレームワークのCSRF対策を有効にすることが大切みたいですね。






