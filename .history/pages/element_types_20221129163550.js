import React from 'react'
import { useFocused, useSelected } from 'slate-react'
import { css } from '@emotion/react'
import { Image } from '@mui/icons-material';

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
        <center><em>{props.children}</em></center>
      </pre>
    )
  }

export const H1Element = props => {
    return (
      <h1 {...props.attributes} align={'center'}>
        {props.children}
      </h1>
    )
  }

export const H2Element = props => {
    return (
      <h2 {...props.attributes} style={{color:'grey'}}>
        {props.children}
      </h2>
    )
  }

export const CenterAligElement = props => {
    return (
      <p {...props.attributes} align={'center'}>
        {props.children}
      </p>
    )
  }

export const LeftAlignElement = props => {
    return (
      <p {...props.attributes} align={'left'}>
        {props.children}
      </p>
    )
  }

export const RightAligElement = props => {
    return (
      <p {...props.attributes} align={'right'}>
        {props.children}
      </p>
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
          <Image
            src={element.url}
            width={400}
            height={400}
            className={css`
              display: block;
              max-width: 100%;
              max-height: 20em;
              box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
            `}
            alt={''}
          />
        </div>
      </div>
    )
}

export const DefaultElement = props => {
    return <p {...props.attributes}>{props.children}</p>
}
