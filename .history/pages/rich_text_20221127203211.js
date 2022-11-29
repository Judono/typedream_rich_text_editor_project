import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Node, Text, Transforms } from 'slate'
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

    // Define a leaf rendering function that is memoized with `useCallback`.
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])

    return (
        <Slate editor={editor} value={initialValue}>
        <Editable
            renderElement={renderElement}
            // Pass in the `renderLeaf` function.
            renderLeaf={renderLeaf}
            onKeyDown={event => {
                console.log(event.key)
            if (!event.ctrlKey) {
                return
            }

            switch (event.key) {
                case '`': {
                event.preventDefault()
                const [match] = Editor.nodes(editor, {
                    match: n => n.type === 'code',
                })
                Transforms.setNodes(
                    editor,
                    { type: match ? null : 'code' },
                    { match: n => Editor.isBlock(editor, n) }
                )
                break
                }

                case 'b': {
                event.preventDefault()
                Transforms.setNodes(
                    editor,
                    { bold: true },
                    { match: n => Text.isText(n), split: true }
                )
                break
                }
            }
            }}
        />
        </Slate>
    )
    }

