import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Node, Text, Transforms } from 'slate'
import { Editable, Slate, useSlate, withReact } from 'slate-react'
import CustomEditor from './custom_editor'
import SlateLeaf from './slate_leaf'

const CodeElement = props => {
    return (
      <pre {...props.attributes} style={{backgroundColor:'#eee'}}>
        <code>{props.children}</code>
      </pre>
    )
  }

const QuoteElement = props => {
    return (
      <pre {...props.attributes} style={{backgroundColor:'#eee'}}>
        <center><em>"{props.children}"</em></center>
      </pre>
    )
  }


const DefaultElement = props => {
        return <p {...props.attributes}>{props.children}</p>
    }

const initialValue = [
    {
        type: 'paragraph',
        children: [
            { text: 'A line of text in a paragraph, ' },
            { text: 'this is bold, ', bold: true},
            { text: 'this is italic, ', italic: true},
            { text: 'this is underline', underline: true},

        ],
    },
    {
        type: 'code',
        children: [{ text: 'this is the code block'}],
    },
    {
        type: 'quote',
        children: [{ text: 'this is the quote block'}],
    },
    {
        type: 'image',
        url: 'https://source.unsplash.com/kFrdX5IeQzI',
        children: [{ text: '' }],
    },
    ]

export default function RichtText() {
    const [editor] = useState(() => withReact(createEditor()))

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      case 'quote':
        return <QuoteElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <SlateLeaf {...props} />
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
            CustomEditor.toggleHighlightMark(editor)
          }}
        >
          Highlight
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}
        >
          Code Block
        </button>

        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleQuoteBlock(editor)
          }}
        >
          Quote Block
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
