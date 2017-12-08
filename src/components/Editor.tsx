import * as React from 'react'
import { Member } from '../types'

type Props = {
	editor: Member;
  onClick: any;
  onChange: any;
};

type State = {
  editor: Member;
};

export class Editor extends React.Component<Props, State> {
  //state: State = this.props.editor;
  state: State = {
    editor: this.props.editor,
  }

  handleSubmit = (event: any) => {
    alert("A name was submitted: " + JSON.stringify(this.state.editor));
    event.preventDefault();
    this.props.onClick(this.props.editor); // NOTE: redux's store
    //this.props.onClick(this.state.editor); NOTE: Component's state
  }

  handleChange = (event: any) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    //console.log(`target = ${JSON.stringify(target)}`)
    console.log(`target = ${target}`)
    console.log(`value  = ${value}`)
    console.log(`name   = ${name}`)

    //this.setState({
    //  editor: { ...this.state.editor, [name]: value }
    //});
    this.props.onChange(name, value)
  }

  render(){
    console.log(`src/components/Editor.tsx`)
    //const editor = this.state.editor; // Error: action was dispatched by props
    const editor = this.props.editor;
    console.log(`editor: ${JSON.stringify(editor)}`)

    return (
      <div className="Editor">
        Editor { editor.id } - { editor.name }
        <br/>
        <form onSubmit={this.handleSubmit}>
          {
            Object.keys(editor).map(key => {
              //console.log(`key = ${key} value = ${this.state[key]}`);
              // value={this.props.editor[key]} // Error: input form doesn't change
              // value={this.state[key]} // Error: this.state[key] is empty
              return (
                <div>
                  <label key={key}>{key}</label>:
                  <input name={key} type="text" 
                    value={this.props.editor[key]}
                    onChange={ e => this.handleChange(e) } />
                  <br/>
                </div>
              );
            })
          }
          <input name="submit" type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default Editor;
