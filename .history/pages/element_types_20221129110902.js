import { View, Text } from 'react-native'
import React from 'react'
import { ReactEditor, useFocused, useSelected, useSlateStatic } from 'slate-react'
import { css } from '@emotion/react'

export const CodeElement = props => {
    return (
      <pre {...props.attributes} style={{backgroundColor:'#eee'}}>
        <code>{props.children}</code>
      </pre>
    )
  }

export const QuoteElement = props => {
    return (
      <pre {...props.attributes} style={{backgroundColor:'#eee'}}>
        <center><em>"{props.children}"</em></center>
      </pre>
    )
  }

export const ImageElement = ({ attributes, children, element }) => {
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
        </div>
      </div>
    )
}


export const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}
