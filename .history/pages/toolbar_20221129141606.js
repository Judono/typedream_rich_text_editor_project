import React from 'react'
import CustomEditor from './custom_editor'
import { InsertImageButton } from './images'

import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import TitleIcon from '@mui/icons-material/Title';
import CodeIcon from '@mui/icons-material/Code';

const SlateToolbar = ({editor}) => {
  return (
    <div>
        {/* bold */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleBoldMark(editor)
          }}
        >
          <FormatBoldIcon />
        </button>

        {/* italic */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleItalicMark(editor)
          }}
        >
          <FormatItalicIcon />
        </button>

        {/* underline */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleUnderlineMark(editor)
          }}
        >
          <FormatUnderlinedIcon />
        </button>

        {/* Code block */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCodeBlock(editor)
          }}
        >
          <CodeIcon />
        </button>

        {/* Quote Block */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleQuoteBlock(editor)
          }}
        >
          <FormatQuoteIcon />
        </button>

        {/* Title h1 Block */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleH1Block(editor)
          }}
        >
          <TitleIcon />
        </button>

        {/* left align */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleLeftAlign(editor)
          }}
        >
          <FormatAlignLeftIcon />
        </button>

        {/* center align */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleCenterAlign(editor)
          }}
        >
          <FormatAlignCenterIcon />
        </button>

        {/* right align */}
        <button
          onMouseDown={event => {
            event.preventDefault()
            CustomEditor.toggleRightAlign(editor)
          }}
        >
          <FormatAlignRightIcon />
        </button>

        <InsertImageButton editor={editor}/>
      </div>
  )
}

export default SlateToolbar