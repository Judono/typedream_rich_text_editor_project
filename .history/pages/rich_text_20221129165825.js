import React, { useCallback, useState } from 'react'
import { createEditor} from 'slate'
import { Editable, Slate, withReact } from 'slate-react'
import CustomEditor from '../components/custom_editor'
import { CenterAligElement, CodeElement, DefaultElement, ImageElement, LeftAlignElement, QuoteElement, RightAligElement, H1Element, H2Element } from '../components/element_types'
import SlateLeaf from '../components/slate_leaf'
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
        url: 'data:image/png;base64,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',
        children: [{ text: ' ' }],
    },
    // {
    //     type: 'image',
    //     url: 'https://api.typedream.com/v0/document/public/66c63598-74bb-4f89-8a5c-611d9805805a_square_cloud_8bit_png.png',
    //     children: [{ text: ' ' }],
    // },
    ]

export default function RichtText() {
    const [myEditor] = useState(() => withReact(createEditor()))

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
        return <ImageElement {...props} editor={myEditor} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])

  const renderLeaf = useCallback(props => {
    return <SlateLeaf {...props} />
  }, [])


  return (
    // Toolbar
    <Slate editor={myEditor} value={initialValue}>

        <SlateToolbar editor={myEditor} />

        <Editable
            editor={myEditor}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={event => {
            if (!event.metaKey) {
                return
            }

            switch (event.key) {
                case "'": {
                event.preventDefault()
                CustomEditor.toggleCodeBlock(myEditor)
                break
                }

                case 'b': {
                event.preventDefault()
                CustomEditor.toggleBoldMark(myEditor)
                break
                }

                case 'i': {
                event.preventDefault()
                CustomEditor.toggleItalicMark(myEditor)
                break
                }

                case 'u': {
                event.preventDefault()
                CustomEditor.toggleUnderlineMark(myEditor)
                break
                }

                case '5': {
                event.preventDefault()
                CustomEditor.toggleH1Block(myEditor)
                break
                }

                case '6': {
                event.preventDefault()
                CustomEditor.toggleH2Block(myEditor)
                break
                }
            }
            }}
        />
    </Slate>
  )
}
