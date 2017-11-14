import * as React from 'react';
import './App.css';
import { Member } from './types';

import Editor from './containers/Editor'
import MemberTable from './containers/MemberTable'

//import Hello from './components/Hello';
import './App.css';

let members: Member[] = [{
  "id": 1,
  "group": 1,
  "name": "Arthur Dent",
  "pronounce": "",
  "spiritualName": "Arthur",
  "birthday": "1991/9/11",
  "telephone": "999-9999",
  "postcode": "999-9999",
  "address": "9999-9999",
  "info": ""
},{
  "id": 2,
  "group": 2,
  "name": "Ford Prefect",
  "pronounce": "",
  "spiritualName": "ford",
  "birthday": "1991/4/11",
  "telephone": "444-4444",
  "postcode": "444-4444",
  "address": "444-4444",
  "info": ""
},{
  "id": 3,
  "group": 3,
  "name": "Trillian",
  "pronounce": "",
  "spiritualName": "trillian",
  "birthday": "1991/3/11",
  "telephone": "333-3333",
  "postcode": "333-3333",
  "address": "333-3333",
  "info": ""
},{
  "id": 4,
  "group": 3,
  "name": "Trillian",
  "pronounce": "",
  "spiritualName": "trillian",
  "birthday": "1991/3/11",
  "telephone": "333-3333",
  "postcode": "333-3333",
  "address": "333-3333",
  "info": ""
}];

//class App extends React.Component {
//class App extends React.Component<Props, object> {
class App extends React.Component<{},{}> {
  render() {
    const editor = members[0];
    return (
      <div>
        <Editor editor={editor}/>
        {/*
        <MemberTable {...members}/>
        */}
        <MemberTable members={members}/>
      </div>
    );
  }
}
export default App;

//return <Hello name="TypeScript" enthusiasmLevel={10}/>
//return (
//  <div className="App">
//    <div className="App-header">
//      <img src={logo} className="App-logo" alt="logo" />
//      <h2>Welcome to React</h2>
//    </div>
//    <p className="App-intro">
//      To get started, edit <code>src/App.tsx</code> and save to reload.
//    </p>
//  </div>
//);
