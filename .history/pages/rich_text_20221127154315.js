import React from 'react'


const CodeElement = props => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

const DefaultElement = props => {
        return <p {...props.attributes}>{props.children}</p>
    }

export default function RichtText() {
  return (
    <div>Rich_text</div>
  )
}
