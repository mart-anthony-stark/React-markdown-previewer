import React from 'react';
import marked from 'marked';

export default function Preview({ markdown }) {
  // ALLOWS LINE BREAKS WITH RETURN BUTTON
  marked.setOptions({
    breaks: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript');
    },
  });
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
