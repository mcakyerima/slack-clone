// import React from 'react'
// import { Editor } from 'react-draft-wysiwyg';
// import {EditorState} from "draft-js"
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// function TextEditor() {
//     const state = {
//         editorState: EditorState.createEmpty(),
//     };
//     var onEditorStateChange = (editorState) => {
//         this.setState({
//             editorState,
//         })
//     };
//     const { editorState } = this.state;
//     return (
        
//         <div>
//             <h2>Text Editor</h2> 
            
//             <Editor
//                 editorState={editorState}
//                 toolbarClassName="toolbarClassName"
//                 wrapperClassName="wrapperClassName"
//                 editorClassName="editorClassName"
//                 onEditorStateChange={this.onEditorStateChange}
//                 />           
//         </div>
//     )
// }

// export default TextEditor
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import React from 'react'

function TextEditor() {
    return (
        <InputField>

        <Editor/>
        <input></input>
        </InputField>
    );
    };
export default TextEditor

const InputField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:5px;
    `

