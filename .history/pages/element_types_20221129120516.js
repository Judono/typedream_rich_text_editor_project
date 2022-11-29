import React from 'react'
import { ReactEditor, useFocused, useSelected, useSlateStatic } from 'slate-react'
import CloseIcon from '@mui/icons-material/Close';
import { css } from '@emotion/react'
import { Transforms } from 'slate';

export const CodeElement = props => {
    return (
      <pre {...props.attributes} style={{backgroundColor:'#eee'}}>
        <code>{props.children}</code>
      </pre>
    )
  }

export const QuoteElement = props => {
    return (
      <pre {...props.attributes} style={{color:'grey'}}>
        <center>" <em>"{props.children}"</em> "</center>
      </pre>
    )
  }

export const ImageElement = ({ attributes, children, element }) => {  
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
