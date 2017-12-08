import { connect, Dispatch } from 'react-redux'
import Editor from  '../components/Editor'
import { Member, StoreState } from '../types'
import { Action, setValueToTable, changeValueInEditor } from '../actions'

//const mapStateToProps = (state: any) => ({
//const mapStateToProps = (state: Member) => ({
const mapStateToProps = (state: StoreState) => {
  return {
	  //member: state.editor
	  editor: state.editor
  }
}

export interface IEditor {
  editor: Member;
}
//type Props = {
//	editor: Member;
//};

//type State = {
//  editor: Member;
//};


const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IEditor) => {
  return {
    onClick: (member: Member) => {
      console.log(`container/Editor.tsx`)
      console.log(`member = ${member}`)
      dispatch(setValueToTable(member))
    },

    //onChange: (member: Member) => {
    onChange: (name: any, value: any) => {
      //console.log(`onChange ${JSON.stringify(member)}`);
      //dispatch(changeValueInEditor(member))
      dispatch(changeValueInEditor(name, value))
    }
  }
}

//export default Editor;
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor as any)
//)(Editor)
