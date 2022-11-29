import React, { useState } from 'react'


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
    const [editor] = useState(() => withReact(createEditor()))

    // Define a rendering function based on the element passed to `props`. We use
    // `useCallback` here to memoize the function for subsequent renders.
    const renderElement = useCallback(props => {
      switch (props.element.type) {
        case 'code':
          return <CodeElement {...props} />
        default:
          return <DefaultElement {...props} />
      }
    }, [])
  
    return (
      <Slate editor={editor} value={initialValue}>
        <Editable
          // Pass in the `renderElement` function.
          renderElement={renderElement}
          onKeyDown={event => {
            console.log(event.key)
          }}
        //   onKeyDown={event => {
        //     if (event.key === '&') {
        //       event.preventDefault()
        //       editor.insertText('and')
        //     }
        //   }}
        />
      </Slate>
    )
}
