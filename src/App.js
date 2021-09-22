import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';
import './style.css';

export default function App() {
  const [markDown, setMarkdown] = useState('');

  return (
    <div>
      <Editor markDown={markDown} setMarkdown={setMarkdown} />
      <Preview markdown={markDown} />
    </div>
  );
}
