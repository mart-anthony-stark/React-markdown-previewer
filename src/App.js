import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Editor from './Editor';
import Preview from './Preview';
import './style.css';

export default function App() {
  const [markDown, setMarkdown] = useState('');

  return (
    <div>
      <div className="editor-wrapper">
        <Toolbar title="Editor" />
        <Editor markDown={markDown} setMarkdown={setMarkdown} />
      </div>
      <div className="editor-wrapper">
        <Toolbar title="Preview" />
        <Preview markdown={markDown} />
      </div>
    </div>
  );
}
