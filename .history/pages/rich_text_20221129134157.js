import { css } from '@emotion/react'
import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Node, Text, Transforms } from 'slate'
import { Editable, ReactEditor, Slate, useFocused, useSelected, useSlate, useSlateStatic, withReact } from 'slate-react'
import CustomEditor from './custom_editor'
import { CenterAligElement, CodeElement, DefaultElement, ImageElement, LeftAlignElement, QuoteElement, RightAligElement, h1Element } from './element_types'
import { InsertImageButton } from './images'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TitleIcon from '@mui/icons-material/Title';
import CodeIcon from '@mui/icons-material/Code';
import SlateLeaf from './slate_leaf'

const initialValue = [
    {
        type: 'h1Block',
        children: [{ text: 'This is a sample Rich Text Editor'}],
    },
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
        url: 'https://api.typedream.com/v0/document/public/66c63598-74bb-4f89-8a5c-611d9805805a_square_cloud_8bit_png.png',
        children: [{ text: ' ' }],
    },
    // {
    //     type: 'video',
    //     url: 'https://api.typedream.com/v0/document/public/66c63598-74bb-4f89-8a5c-611d9805805a_square_cloud_8bit_png.png',
    //     children: [{ text: 'typedream logo' }],
    // },
    ]

export default function RichtText() {
    const [editor] = useState(() => withReact(createEditor()))

  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      case 'quote':
        return <QuoteElement {...props} />
      case 'h1Block':
        return <H1Element {...props} />
      case 'centerAlign':
        return <CenterAligElement {...props} />
      case 'leftAlign':
        return <LeftAlignElement {...props} />
      case 'rightAlign':
        return <RightAligElement {...props} />
      case 'image':
        return <ImageElement {...props} editor={editor} />
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
        {/* bold */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}
        >
          <FormatBoldIcon />
        </button>

        {/* italic */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleItalicMark(editor)
          }}
        >
          <FormatItalicIcon />
        </button>

        {/* underline */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleUnderlineMark(editor)
          }}
        >
          <FormatUnderlinedIcon />
        </button>

        {/* Code block */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}
        >
          <CodeIcon />
        </button>

        {/* Quote Block */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleQuoteBlock(editor)
          }}
        >
          <FormatQuoteIcon />
        </button>

        {/* Title h1 Block */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleH1Block(editor)
          }}
        >
          <TitleIcon />
        </button>

        {/* left align */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleLeftAlign(editor)
          }}
        >
          <FormatAlignLeftIcon />
        </button>

        {/* center align */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCenterAlign(editor)
          }}
        >
          <FormatAlignCenterIcon />
        </button>

        {/* right align */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleRightAlign(editor)
          }}
        >
          <FormatAlignRightIcon />
        </button>

        <InsertImageButton editor={editor}/>
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
