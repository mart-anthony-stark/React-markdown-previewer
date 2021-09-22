import React, { useState, useEffect } from 'react';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import './style.css';

export default function App() {
  const [markDown, setMarkdown] = useState('');
  useEffect(() => {
    setMarkdown(placeholder);
  }, []);
  const placeholder = `### Welcome to my React Markdown Previewer
  <br>
  <p align="center">
  <img src="https://github.com/mart-anthony-stark/mart-anthony-stark/blob/main/github%20header.png?raw=true" width="70%" height="200px" align="center"/>
  
   <h3 align="center">Hi there👋</h3> 
   </p>
   <p align="center">My name is Mart Anthony Salazar </p>
              <p></p>
              <p align="center">I am a second year student of Bachelor of Science in Information Technology.</p>
              <br>
  <div align="center">
   <img src="https://img.icons8.com/color/80/000000/vue-js.png"/>
   <img src="https://img.icons8.com/office/80/000000/react.png"/>
   <img src="https://img.icons8.com/nolan/80/react-native.png"/>
   <img src="https://img.icons8.com/color/80/000000/mongodb.png"/>
   <img src="https://img.icons8.com/windows/80/000000/node-js.png"/>
   <img src="https://img.icons8.com/color/80/000000/java-coffee-cup-logo.png"/>
  <div>
   
   
  <p align="center">
  <img align="center" height="170px" src="https://github-readme-stats.vercel.app/api?username=mart-anthony-stark&hide=contribs,prs,stars?count_private=true&show_icons=true&theme=tokyonight" />
  <img align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=mart-anthony-stark&theme=tokyonight&layout=compact" width="400px" />
  </p>
  

`;

  return (
    <div className="app">
      <div className="editor-wrapper wrapper">
        <Toolbar title="Editor" />
        <Editor markDown={markDown} setMarkdown={setMarkdown} />
      </div>
      <div className="preview-wrapper wrapper">
        <Toolbar title="Preview" />
        <Preview markdown={markDown} />
      </div>
    </div>
  );
}
