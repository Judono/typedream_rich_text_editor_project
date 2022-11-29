import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Node, Transforms } from 'slate'
import { Editable, Slate, useSlate, withReact } from 'slate-react'

const CodeElement = props => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

const BoldElement = props => {
    return (
      <p {...props.attributes}>
        <b>{props.children}</b>
      </p>
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
        case 'bold':
            return 
        default:
            return <DefaultElement {...props} />
        }
    }, [])

    return (
        <Slate editor={editor} value={initialValue}>
        <Editable
            renderElement={renderElement}
            onKeyDown={event => {
                console.log(event.key);
            if (event.key === '`' && event.ctrlKey) {
                // to make the code block

                event.preventDefault()

                // Determine whether any of the currently selected blocks are code blocks.
                const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
                })

                // Toggle the block type depending on whether there's already a match.
                Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'code' },
                { match: n => Editor.isBlock(editor, n) }
                )
            } else if (event.key === 'b' && event.ctrlKey){
                // to make bold

                event.preventDefault()

                // Determine whether any of the currently selected blocks are code blocks.
                const [match] = Editor.nodes(editor, {
                match: n => n.type === 'code',
                })

                // Toggle the block type depending on whether there's already a match.
                Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'bold' },
                { match: n => Editor.isBlock(editor, n) }
                )
            }
            }}
        />
        </Slate>
    )
}
