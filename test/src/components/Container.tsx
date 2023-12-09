// src/components/Container.tsx

import React from 'react';
import './Container.css';

const Container: React.FC = () => {
  return (
    <div className="Container">
      <span>
      <h1>Learned</h1>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
      </span>
      <span>
      <h1>Learning</h1>
        <li>React.js</li>
        <li>Python</li>
        <li>MySQL</li>
      </span>
      <span>
        <h1>Expected</h1>
        <li>MongoDB</li>
        <li>AI</li>
      </span>

    </div>
  );
}

export default Container;
