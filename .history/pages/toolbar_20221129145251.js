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

import styles from '../styles/Home.module.css'
import { Button, ButtonGroup } from '@mui/material';

const SlateToolbar = ({editor}) => {
  return (

    <div className={styles.toolbar}>
        <ButtonGroup 
            size='large'
            sx={background: linear-gradient(330deg, #ff0062, #8000ff, #00c0fe);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;} >

            {/* bold */}
            <Button onMouseDown={event => {
                event.preventDefault()
                CustomEditor.toggleBoldMark(editor)
                }}
                >
                <FormatBoldIcon />
            </Button>

            {/* italic */}
            <Button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleItalicMark(editor)
                }}
                >
                <FormatItalicIcon />
            </Button>

            {/* underline */}
            <Button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleUnderlineMark(editor)
                }}
                >
                <FormatUnderlinedIcon />
            </Button>

            {/* Code block */}
            <Button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleCodeBlock(editor)
                }}
                >
                <CodeIcon />
            </Button>

            {/* Quote Block */}
            <Button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleQuoteBlock(editor)
                }}
                >
                <FormatQuoteIcon />
            </Button>

            {/* Title h1 Block */}
            <Button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleH1Block(editor)
                }}
                >
                <TitleIcon />
            </Button>

            {/* left align */}
            <Button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleLeftAlign(editor)
                }}
                >
                <FormatAlignLeftIcon />
            </Button>

            {/* center align */}
                <Button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleCenterAlign(editor)
                }}
                >
                <FormatAlignCenterIcon />
            </Button>

            {/* right align */}
            <Button
                onMouseDown={event => {
                    event.preventDefault()
                    CustomEditor.toggleRightAlign(editor)
                }}
                >
                <FormatAlignRightIcon />
            </Button>

            <InsertImageButton editor={editor}/>
        </ButtonGroup>
    </div>
  )
}

export default SlateToolbar