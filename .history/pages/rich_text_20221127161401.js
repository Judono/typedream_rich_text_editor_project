import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Node } from 'slate'
import { Editable, Slate, useSlate, withReact } from 'slate-react'

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

const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
    ]

export default function RichtText() {
    const [editor] = useState(() => withReact(createEditor()))

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
            renderElement={renderElement}
            onKeyDown={event => {
                console.log(event.key)
                if (event.key === '`' && event.ctrlKey) {
                    // Prevent the "`" from being inserted by default.
                    event.preventDefault()
                    // Otherwise, set the currently selected blocks type to "code".
                    Transforms.setNodes(
                    editor,
                    { type: 'code' },
                    { match: n => Editor.isBlock(editor, n) }
                    )
                }
                }}
        />
        </Slate>
    )
}
