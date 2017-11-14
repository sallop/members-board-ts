//import React, { Component } from 'react'
import * as React from 'react'
import { Member } from '../types'

//const InputForm = (state) => class extends Component {
//}
type Props = {
	editor: Member;
	//style?: React.CSSProperties,
}

//const Editor = ({member}) => {
//const Editor = ({member}: Member) => {
//const Editor = ({member: Member}) => {
//const Editor: React.SFC<Props> = (props) => {
//const Editor: React.SFC<Props> = (editor) => {
const Editor: React.SFC<Props> = ({editor}) => {
//const Editor = (member: Member) => {
  console.log(`Editor ${JSON.stringify(editor)}`);
  return (
    <div className="Editor">
			{/*
      editor {JSON.stringify(props)}
      Editor { props.editor.id } - { props.editor.name }
      Editor { editor.id } - { editor.name }
      editor {JSON.stringify(editor)}
      Editor { editor["id"] } - { editor["name"] }
				*/}

      Editor { editor.id } - { editor.name }
    </div>
  )
}

export default Editor;
