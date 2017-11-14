import { connect, Dispatch } from 'react-redux'
import Editor from  '../components/Editor'
import { Member, StoreState } from '../types'
import { Action, setValueToTable } from '../actions'

//const mapStateToProps = (state: any) => ({
//const mapStateToProps = (state: Member) => ({
const mapStateToProps = (state: StoreState) => {
  console.log(`mapStateToProps ${JSON.stringify(state.editor)}`);
  return {
	  //member: state.editor
	  editor: state.editor
  }
}

export interface IEditor {
  editor: Member;
}

const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IEditor) => {
  console.log(`mapDispatchToProps ${JSON.stringify(ownProps)}`)

  return {
    onClick: (member: Member) => {
      console.log(`onClick ${JSON.stringify(member)}`)
      dispatch(setValueToTable(member))
    }
  }
}

//export default Editor;
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Editor)
