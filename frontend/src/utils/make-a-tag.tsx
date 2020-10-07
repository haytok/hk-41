import React from "react";

export const makeATag = (url: string, content: string): JSX.Element => (
  <a href={url} target="_blank" rel="noreferrer noopener">
    {content}
  </a>
);
