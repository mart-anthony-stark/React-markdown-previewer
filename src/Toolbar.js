import React from 'react';

export default function ({ title }) {
  return (
    <div className="toolbar">
      <span className="title">{title}</span>
      <div className="maximize">
        <i class="fa fa-arrows-alt" aria-hidden="true"></i>
      </div>
    </div>
  );
}
