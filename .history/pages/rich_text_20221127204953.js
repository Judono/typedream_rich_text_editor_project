import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Node, Text, Transforms } from 'slate'
import { Editable, Slate, useSlate, withReact } from 'slate-react'
import CustomEditor from './custom_editor'

const CodeElement = props => {
    return (
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    )
  }

const Leaf = props => {
    return (
        <span
        {...props.attributes}
        style={{ fontWeight: props.leaf.bold ? 'bold' : 'normal' }}
        >
        {props.children}
        </span>
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

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  return (
    // Add a toolbar with buttons that call the same methods.
    <Slate editor={editor} value={initialValue}>
      <div>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleItalicMark(editor)
          }}
        >
          Italic
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleUnderlineMark(editor)
          }}
        >
          Underline
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}
        >
          Code Block
        </button>
      </div>
      <Editable
        editor={editor}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (!event.metaKey) {
            return
          }

          switch (event.key) {
            case '`': {
              event.preventDefault()
              CustomEditor.toggleCodeBlock(editor)
              break
            }

            case 'b': {
              event.preventDefault()
              CustomEditor.toggleBoldMark(editor)
              break
            }

            case 'i': {
              event.preventDefault()
              CustomEditor.toggleItalicMark(editor)
              break
            }

            case 'u': {
              event.preventDefault()
              CustomEditor.toggleUnderlineMark(editor)
              break
            }
          }
        }}
      />
    </Slate>
  )
}
