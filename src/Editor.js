import React from 'react';

export default function Editor({ markDown, setMarkdown }) {
  return (
    <textarea
      id="editor"
      onChange={(e) => setMarkdown(e.target.value)}
      value={markDown}
    />
  );
}
