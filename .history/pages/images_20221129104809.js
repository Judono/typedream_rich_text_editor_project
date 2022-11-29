import React from 'react'

function ImageEditor() {
    const isImageUrl = url => {
        if (!url) return false
        if (!isUrl(url)) return false
        const ext = new URL(url).pathname.split('.').pop()
        return imageExtensions.includes(ext)
      }

  return (
    <div>ImageEditor</div>
  )
}

export default ImageEditor