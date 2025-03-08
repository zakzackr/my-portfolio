import React from 'react';

const Links: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '10px' }}>Links</h2>
      <div>
        <a href="https://github.com/zakzackr" target="_blank" rel="noopener noreferrer">
          <img src="/github-logo.png" alt="GitHub" style={{ width: '40px', height: '40px' }} />
        </a>
        <a href="https://qiita.com/shibainuu" target="_blank" rel="noopener noreferrer">
          <img src="/qiita-logo.png" alt="Qiita" style={{ width: '40px', height: '40px' }} />
        </a>
      </div>
    </div>
  );
};

export default Links;
