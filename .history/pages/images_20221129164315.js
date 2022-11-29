import React from 'react'
import { Transforms } from 'slate'
import ImageIcon from '@mui/icons-material/Image';
import { Button } from '@mui/material';

export const InsertImageButton = ({editor}) => {
    return (
        <Button
            onMouseDown={event => {
                event.preventDefault()
                const url = window.prompt('Enter the URL of the image:')
                url && insertImage(editor, url)
            }}
            >
            <ImageIcon />
        </Button>
    )
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