import React from 'react'

const SlateLeaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  if (leaf.highlight) {
    children = <span style={{backgroundColor:'yellow'}}>{children}</span>;
  }

  return <span {...attributes}>{children}</span>;
};

export default SlateLeaf