import React from 'react';

export default function Editor({ markDown, setMarkdown }) {
  return (
    <textarea onChange={(e) => setMarkdown(e.target.value)} value={markDown} />
  );
}
