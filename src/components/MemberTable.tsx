import * as React from 'react'
import { Member } from '../types'

//const MemberTable = ({members: Member[]}) => { error
//const MemberTable = (members: Member[]) => {
interface MemberTableProps {
	members: Member[];
  //onClick: () => void;
  onClick: any;
  onClickUpdate: any;
}

//class MemberTable extends React.StatelessComponent<MemberTableProps, void>{
//const MemberTable extends React.StatelessComponent<MemberTableProps, void>{
//const MemberTable: React.SFC<MemberTableProps> = (members) => {
//const MemberTable: React.SFC<MemberTableProps> = ({members}) => {
//const MemberTable: React.SFC<MemberTableProps> = ({members, onClick}) => {
//const MemberTable: React.SFC<MemberTableProps> = ({members, onClick}) => {
//const MemberTable: React.SFC<MemberTableProps> = (members, onClick) => {
//const MemberTable: React.SFC<MemberTableProps> = ({members}, onClick) => {
//const MemberTable: React.SFC<MemberTableProps> = ({members, onClick}) => {
//const MemberTable: React.SFC<MemberTableProps> = ({members, onClick}) => {
const MemberTable: React.SFC<MemberTableProps> = ({members, onClick, onClickUpdate}) => {
  var tags: any[] = [];

 //const handleClick = (x : string) => {
 const handleClickUpdate = (x : string) => {
   console.log(`handle update ${x}`);
   onClickUpdate();
 }
  
  //var onClick = () => {
  //  console.log(`members = ${JSON.stringify(members)}`)
  //};
  //var tags: React.SFC<any> = [];
  //var tags: React.Element<any> = [];
  //console.log(`MemberTable.render`)
  //console.log(`members = ${JSON.stringify(members)}`)
  //console.log(`onClick = ${JSON.stringify(onClick)}`)
  Object.keys(members).map((k,idx)=>{
    tags.push(<li className="MemberTable-list" key={idx} onClick={ 
      () => { 
        const member = members[idx];
        //console.log(`idx = ${idx}`); 
        //console.log(`member = ${JSON.stringify(member)}`); 
        onClick(member);
      }
    }>
      {members[k].id}-{members[k].name}</li>
    )
  })
  return (
    <div className="MemberTable">
      MemberTable
      <br/>
      <ul>{tags}</ul>
      {/*
      <button onClick={handleClick.call(this,"args")}>update</button>
      <button onClick={handleClick.bind(null, "args")}>update</button>
        */}
      <button onClick={ () => handleClickUpdate("args")}>update</button>
    </div>
  );
}

export default MemberTable;
