import React from 'react'

function ImageEditor() {
    const isImageUrl = url => {
        if (!url) return false
        if (!isUrl(url)) return false
        const ext = new URL(url).pathname.split('.').pop()
        return imageExtensions.includes(ext)
      }

    const InsertImageButton = () => {
        const editor = useSlateStatic()
        return (
            <Button
            onMouseDown={event => {
                event.preventDefault()
                const url = window.prompt('Enter the URL of the image:')
                if (url && !isImageUrl(url)) {
                alert('URL is not an image')
                return
                }
                url && insertImage(editor, url)
            }}
            >
            <Icon>image</Icon>
            </Button>
        )
    }

  return (
    <div>ImageEditor</div>
  )
}

export default ImageEditor