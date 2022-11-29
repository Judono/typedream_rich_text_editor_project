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

    const Image = ({ attributes, children, element }) => {
        const editor = useSlateStatic()
        const path = ReactEditor.findPath(editor, element)
      
        const selected = useSelected()
        const focused = useFocused()
        return (
          <div {...attributes}>
            {children}
            <div
              contentEditable={false}
              className={css`
                position: relative;
              `}
            >
              <img
                src={element.url}
                className={css`
                  display: block;
                  max-width: 100%;
                  max-height: 20em;
                  box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
                `}
              />
              <Button
                active
                onClick={() => Transforms.removeNodes(editor, { at: path })}
                className={css`
                  display: ${selected && focused ? 'inline' : 'none'};
                  position: absolute;
                  top: 0.5em;
                  left: 0.5em;
                  background-color: white;
                `}
              >
                <Icon>delete</Icon>
              </Button>
            </div>
          </div>
        )
      }

      

  return (
    <div>ImageEditor</div>
  )
}

export default ImageEditor