import React, { useState } from 'react';
import Editor from './Editor';
import './style.css';

export default function App() {
  const [markDown, setMarkdown] = useState('asd');

  return (
    <div>
      <Editor markDown={markDown} setMarkdown={setMarkdown} />
      {markDown}
    </div>
  );
}
