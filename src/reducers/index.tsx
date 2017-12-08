import { Action } from '../actions'
import { StoreState, Member } from '../types'
import * as constants from '../constants'

const mockData: Member[] = [{
  "id": "1",
  "group": "1",
  "name": "Arthur Dent",
  "pronounce": "",
  "spiritualName": "Arthur",
  "birthday": "1991/9/11",
  "telephone": "999-9999",
  "postcode": "999-9999",
  "address": "9999-9999",
  "info": ""
},{
  "id": "2",
  "group": "2",
  "name": "Zaphod Beeblebrox",
  "pronounce": "",
  "spiritualName": "zaphod",
  "birthday": "1991/2/11",
  "telephone": "222-2222",
  "postcode": "222-2222",
  "address": "222-2222",
  "info": ""
},{
  "id": "3",
  "group": "3",
  "name": "Trillian",
  "pronounce": "",
  "spiritualName": "trillian",
  "birthday": "1991/3/11",
  "telephone": "333-3333",
  "postcode": "333-3333",
  "address": "333-3333",
  "info": ""
},{
  "id": "4",
  "group": "4",
  "name": "Ford Prefect",
  "pronounce": "",
  "spiritualName": "ford",
  "birthday": "1991/4/11",
  "telephone": "444-4444",
  "postcode": "444-4444",
  "address": "444-4444",
  "info": ""
},{
  "id": "5",
  "group": "5",
  "name": "Vogon",
  "pronounce": "",
  "spiritualName": "vogon",
  "birthday": "1991/5/11",
  "telephone": "555-5555",
  "postcode": "555-5555",
  "address": "555-5555",
  "info": ""
}];


function initialState(): StoreState {
  return {
    editor: mockData[0],
	  members: mockData
  }
}

export default function reducer(state: StoreState = initialState(), action: Action) : StoreState {
	//let { type, payload } = action
	//switch(type){
  console.log(`reducer`)
  console.log(`action.type = ${action.type}`)
	switch(action.type){
	case constants.SET_VALUE_TO_EDITOR:
    let editor = { ...action.payload.editor }
    console.log(`constants.SET_VALUE_TO_EDITOR`)
    console.log(`editor: ${JSON.stringify(editor)}`)
		return { ...state, editor };
		//return { ...state, editor: action.payload.editor};
	  // return { ...state, ...newState }
	case constants.SET_VALUE_TO_TABLE:
    //let members: Member[] = mockData;
    let edited = action.payload.edited;
    //let members: Member[] = [edited, edited, edited];
    //let members: Member[] = state.members; // Error: shallow copy doesn't work for component update 
    let members: Member[] = [...state.members];
		console.log(`SET_VALUE_TO_TABLE: ${JSON.stringify(action.payload)}`)
    console.log(`edited ${JSON.stringify(edited)}`)
    members.forEach((member, index, array) => {
      if (member.id === edited.id) {
        console.log(`if (member.id === edited.id) {{`)
        array[index] = edited
      }
    })
    console.log(`members ${JSON.stringify(members)}`)
    //Object.keys(members).map(key => {
    //  console.log(`before: ${JSON.stringify(members)}`);
    //  const member = members[key];
    //  if( edited.id === member.id ){
    //    members[key] = edited;
    //    console.log(`after : ${JSON.stringify(members)}`);
    //  }
    //})
		//return { ...state, members: members };
		return { ...state, members };
		//return { ...state, members: action.payload.edited};
		//return { ...state, edited: action.payload.edited};
    case constants.CHANGE_VALUE_IN_EDITOR:
      //let changed = action.payload.changed;
      let { name, value } = action.payload;
      console.log(`CHANGE_VALUE_IN_EDITOR ${JSON.stringify(action.payload)}`)
      console.log(`name ${name} value ${value}`)
      console.log(`state.editor ${JSON.stringify(state.editor)}`)
      //let changed : Member = [...state.editor]; // any[] is not assignable to type 'Member'
      let changed : Member = { ...state.editor };
      changed[name] = value;
      //NOTE: need to instantinate modified Member
      //console.log(`changed ${JSON.stringify(changed)}`)
      //return { ...state, editor: changed };
      return { ...state, editor: changed };
	default:
		console.log(`default ${JSON.stringify(state)}`)
		return state
	}

}
