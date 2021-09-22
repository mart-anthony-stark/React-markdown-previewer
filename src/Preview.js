import React from 'react';
import marked from 'marked';

export default function Preview({ markdown }) {
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };
  return (
    <div
      dangerouslySetInnerHTML={{ __html: marked(markdown, { renderer }) }}
    ></div>
  );
}
