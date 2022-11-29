import React from 'react'
import { Transforms } from 'slate'

// const isImageUrl = url => {
//     if (!url) return false
//     // if (!isUrl(url)) return false
//     const ext = new URL(url).pathname.split('.').pop()
//     return imageExtensions.includes(ext)
//     }

export const InsertImageButton = ({editor}) => {
    // const editor = useSlateStatic()
    return (
        <button
        onMouseDown={event => {
            event.preventDefault()
            const url = window.prompt('Enter the URL of the image:')
            // if (url && !isImageUrl(url)) {
            // alert('URL is not an image')
            // return
            // }
            url && insertImage(editor, url)
        }}
        >
        Insert Image
        </button>
    )
}


const withImages = editor => {
    const { insertData, isVoid } = editor
    
    editor.isVoid = element => {
        return element.type === 'image' ? true : isVoid(element)
    }
    
    editor.insertData = data => {
        const text = data.getData('text/plain')
        const { files } = data
    
        if (files && files.length > 0) {
        for (const file of files) {
            const reader = new FileReader()
            const [mime] = file.type.split('/')
    
            if (mime === 'image') {
            reader.addEventListener('load', () => {
                const url = reader.result
                insertImage(editor, url)
            })
    
            reader.readAsDataURL(file)
            }
        }
        } else if (isImageUrl(text)) {
        insertImage(editor, text)
        } else {
        insertData(data)
        }
    }
    
    return editor
}

const insertImage = (editor, url) => {
    const text = { text: '' }
    const image = { type: 'image', url, children: [text] }
    Transforms.insertNodes(editor, image)
    }
    
    const Element = props => {
    const { attributes, children, element } = props
    
    switch (element.type) {
        case 'image':
        return <Image {...props} />
        default:
        return <p {...attributes}>{children}</p>
    }
}