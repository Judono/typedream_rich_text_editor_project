import { Editor, Text, Transforms } from 'slate'

const CustomEditor = {
    isBoldMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.bold === true,
        universal: true,
        })
    
        return !!match
    },

    isItalicMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.italic === true,
        universal: true,
        })
    
        return !!match
    },

    isUnderlineMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.underline === true,
        universal: true,
        })
    
        return !!match
    },

    isHighlightMarkActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.highlight === true,
        universal: true,
        })
    
        return !!match
    },
    
    isCodeBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.type === 'code',
        })
    
        return !!match
    },

    isQuoteBlockActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.type === 'quote',
        })
    
        return !!match
    },

    isCenterAlignActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.type === 'centerAlign',
        })
    
        return !!match
    },

    isLeftAlignActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.type === 'leftAlign',
        })
    
        return !!match
    },

    isRightAlignActive(editor) {
        const [match] = Editor.nodes(editor, {
        match: n => n.type === 'RightAlign',
        })
    
        return !!match
    },
    
    toggleBoldMark(editor) {
        const isActive = CustomEditor.isBoldMarkActive(editor)
        Transforms.setNodes(
        editor,
        { bold: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
        )
    },

    toggleItalicMark(editor) {
        const isActive = CustomEditor.isItalicMarkActive(editor)
        Transforms.setNodes(
        editor,
        { italic: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
        )
    },

    toggleUnderlineMark(editor) {
        const isActive = CustomEditor.isUnderlineMarkActive(editor)
        Transforms.setNodes(
        editor,
        { underline: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
        )
    },

    toggleHighlightMark(editor) {
        const isActive = CustomEditor.isHighlightMarkActive(editor)
        Transforms.setNodes(
        editor,
        { highlight: isActive ? null : true },
        { match: n => Text.isText(n), split: true }
        )
    },
    
    toggleCodeBlock(editor) {
        const isActive = CustomEditor.isCodeBlockActive(editor)
        Transforms.setNodes(
        editor,
        { type: isActive ? null : 'code' },
        { match: n => Editor.isBlock(editor, n) }
        )
    },

    toggleQuoteBlock(editor) {
        const isActive = CustomEditor.isQuoteBlockActive(editor)
        Transforms.setNodes(
        editor,
        { type: isActive ? null : 'quote' },
        { match: n => Editor.isBlock(editor, n) }
        )
    },
    }

export default CustomEditor