import { connect, Dispatch } from 'react-redux'
import { Member } from '../types'
import MemberTable from '../components/MemberTable'
import { StoreState } from '../types'
import { Action, setValueToEditor } from '../actions'
//import * from '../actions'
//import { RootState, Dispatch } from '@src/redux'
//import { Dispatch } from '@src/redux'

//const mapStateToProps = (state: StoreState) => {
//const mapStateToProps = (state: any) => {
//const mapStateToProps = (state: Member[]) => {
const mapStateToProps = (state: StoreState) => {
  console.log("mapStateToProps");
  console.log(`${JSON.stringify(state.members)}`);
	return { members: state.members }
}

export interface IMemberTable {
  //initialCount: number,
  members: Member[];
}

//const mapDispatchToProps = (dispatch: Dispatch, ownProps) => {
//SetValueToEditor
//SetValueToTable 
//Action
//const mapDispatchToProps = (dispatch: Dispatch<{}>, ownProps: IMemberTable) => {
//export type Action = SetValueToEditor | SetValueToTable;
const mapDispatchToProps = (dispatch: Dispatch<Action>, ownProps: IMemberTable) => {
  //console.log(`mapDispatchToProps ${dispatch} ${ownProps}`);
  console.log(`mapDispatchToProps`);
  console.log(`ownProps = ${JSON.stringify(ownProps)}`)
  return {
    //onClick: (member) => { dispatch(setValueToEditor(member)) }
    onClick: (member: Member) => {
      console.log(`onClick ${JSON.stringify(member)}`)
      //dispatch(() => { console.log(JSON.stringify(member)); })
      dispatch(setValueToEditor(member))
    }
  }
}


export default connect(
  //export default connect<StateFromProps, DispatchFromProps>(
	mapStateToProps,
	mapDispatchToProps
)(MemberTable)
