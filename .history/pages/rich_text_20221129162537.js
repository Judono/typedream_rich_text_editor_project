import { css } from '@emotion/react'
import React, { useCallback, useState } from 'react'
import { createEditor, Editor, Node, Text, Transforms } from 'slate'
import { Editable, ReactEditor, Slate, useFocused, useSelected, useSlate, useSlateStatic, withReact } from 'slate-react'
import CustomEditor from './custom_editor'
import { CenterAligElement, CodeElement, DefaultElement, ImageElement, LeftAlignElement, QuoteElement, RightAligElement, H1Element, H2Element } from './element_types'
import SlateLeaf from './slate_leaf'
import SlateToolbar from './toolbar'

const initialValue = [
    {
        type: 'h1Block',
        children: [{ text: 'This is a sample Rich Text Editor'}],
    },
    {
        type: 'h2Block',
        children: [{ text: 'hotkey shortcuts:'}],
    },
    {
        type: 'paragraph',
        children: [
            { text: "   cmd + ' for code block\n   cmd + b for bold\n   cmd + i for italic\n   cmd + u for underline\n   cmd + 5 for h1 font\n\n"},
            { text: 'A line of text in a paragraph, ' },
            { text: 'this is bold, ', bold: true},
            { text: 'this is italic, ', italic: true},
            { text: 'this is underline \n\n', underline: true},
        ],
    },
    {
        type: 'code',
        children: [{ text: '// this is the code block\n<Head> \n<title>Typedream code</title> \n<meta name="description" content="Generated by create next app" /> \n<link rel="icon" href="/favicon.ico" /> \n</Head>'}],
    },
    {
        type: 'paragraph',
        children:[{ text: ' ' }],
    },
    {
        type: 'quote',
        children: [{ text: "you miss 100% of the shoots you don't take"}],
    },
    {
        type: 'image',
        src: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
        children: [{ text: ' ' }],
    },
    // {
    //     type: 'image',
    //     url: 'https://api.typedream.com/v0/document/public/66c63598-74bb-4f89-8a5c-611d9805805a_square_cloud_8bit_png.png',
    //     children: [{ text: ' ' }],
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
      case 'h2Block':
        return <H2Element {...props} />
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
                case "'": {
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

                case '5': {
                event.preventDefault()
                CustomEditor.toggleH1Block(editor)
                break
                }

                case '6': {
                event.preventDefault()
                CustomEditor.toggleH2Block(editor)
                break
                }
            }
            }}
        />
    </Slate>
  )
}
