// src/components/Container.tsx

import React from 'react';
import './Container.css';

const Container: React.FC = () => {
  return (
    <div className="Container">
      <h1>HOW IS IT GOING?</h1>
      <hr />
      <div className="content">
      <span>
      <h2>Learned</h2>
        <ul>Basic Web
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul>Server
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
      </span>
      <span>
      <h2>Learning</h2>
        <ul>Language
          <li>Python</li>
          <li>TypeScript</li>
        </ul>
        <ul>Database
          <li>MySQL</li>
        </ul>
        <ul>Library
          <li>React.js</li>
        </ul>
      </span>
      <span>
        <h2>Expected</h2>
        <ul>Language
          <li>C++</li>
          
        </ul>
        <ul>Database
          <li>MongoDB</li>
        </ul>
        <ul>AI
          <li>Machine Learning</li>
        </ul>
        <ul>Framework
          <li>Vue.js</li>
        </ul>
      </span>
      </div>
    </div>
  );
}

export default Container;
