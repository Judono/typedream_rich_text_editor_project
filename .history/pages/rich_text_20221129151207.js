import { css } from '@emotion/react'
import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Node, Text, Transforms } from 'slate'
import { Editable, ReactEditor, Slate, useFocused, useSelected, useSlate, useSlateStatic, withReact } from 'slate-react'
import CustomEditor from './custom_editor'
import { CenterAligElement, CodeElement, DefaultElement, ImageElement, LeftAlignElement, QuoteElement, RightAligElement, H1Element } from './element_types'
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
import SlateToolbar from './toolbar'

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
            { text: 'this is underline \n', underline: true},
        ],
    },
    {
        type: 'code',
        children: [{ text: 'this is the code block'}],
    },
    {
        type: 'paragraph',
        children: [
            { text: '\n' },,
        ],
    },
    {
        type: 'quote',
        children: [{ text: 'this is the quote block'}],
    },
    {
        type: 'paragraph',
        children: [
            { text: '\n' },,
        ],
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
    // Toolbar
    <Slate editor={editor} value={initialValue}>

        <SlateToolbar editor={editor} />

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
