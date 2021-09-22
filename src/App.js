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
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.



You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
<pre><code>alert('asd)</code></pre>

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
