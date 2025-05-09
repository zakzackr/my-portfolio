import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section id="header" className="mt-10 mb-5">
      <h3 className="text-lg font-bold">Tech Stack</h3>
      <div className="mb-3">
        <p className="font-bold mb-2">Languages</p>
        <ul className="list-none p-0 m-0">
          <li className="relative pl-6 mb-1">
            <span className="absolute left-2 text-brown-800">–</span>
            <span className="font-bold">Java</span>, 
            <span className="font-bold"> JavaScript</span>, 
            <span className="font-bold"> Python</span>, 
            TypeScript          
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <p className="font-bold mb-2">Backend</p>
        <ul className="list-none p-0 m-0">
          <li className="relative pl-6 mb-1">
            <span className="absolute left-2 text-brown-800">–</span>
            <span className="font-bold">Spring Boot</span>,
            <span className="font-bold"> Spring Security</span>

          </li>
        </ul>
      </div>
      <div className="mb-3">
        <p className="font-bold mb-2">Frontend</p>
        <ul className="list-none p-0 m-0">
          <li className="relative pl-6 mb-1">
            <span className="absolute left-2 text-brown-800">–</span>
            <span className="font-bold">React</span>, 
            Next.js
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <p className="font-bold mb-2">Database</p>
        <ul className="list-none p-0 m-0">
          <li className="relative pl-6 mb-1">
            <span className="absolute left-2 text-brown-800">–</span>
            <span className="font-bold">MySQL</span>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <p className="font-bold mb-2">Infrastructure</p>
        <ul className="list-none p-0 m-0">
          <li className="relative pl-6 mb-1">
            <span className="absolute left-2 text-brown-800">–</span>
            <span className="font-bold">AWS</span>
            (S3, CloudFront, Elastic Beanstalk, EC2, RDS, Route53, ALB), Docker
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <p className="font-bold mb-2">CI/CD</p>
        <ul className="list-none p-0 m-0">
          <li className="relative pl-6 mb-1">
            <span className="absolute left-2 text-brown-800">–</span>
            Jenkins
          </li>
        </ul>
      </div>
      <div className="mt-2 mb-4">
        <p className="text-sm">太字はコアスキル、それ以外は触れたことのある技術、キャッチアップ中の技術です。</p>
      </div>
    </section>
  );
};

export default TechStack;
