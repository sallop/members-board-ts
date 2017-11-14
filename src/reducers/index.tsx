//import * as actions from '../actions';
//import { EnthusiasmAction } from '../actions';
//import { StoreState } from '../types/index';
//import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

//export function enthusiasm(state: StoreState, action: EnthusiasmAction): StoreState {
//  switch (action.type) {
//    case INCREMENT_ENTHUSIASM:
//      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
//    case DECREMENT_ENTHUSIASM:
//      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)};
//  }

//  return state;
//}
import { Action } from '../actions'
import { StoreState, Member } from '../types'
import * as constants from '../constants'

const mockData: Member[] = [{
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
  "name": "Zaphod Beeblebrox",
  "pronounce": "",
  "spiritualName": "zaphod",
  "birthday": "1991/2/11",
  "telephone": "222-2222",
  "postcode": "222-2222",
  "address": "222-2222",
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
  "group": 4,
  "name": "Ford Prefect",
  "pronounce": "",
  "spiritualName": "ford",
  "birthday": "1991/4/11",
  "telephone": "444-4444",
  "postcode": "444-4444",
  "address": "444-4444",
  "info": ""
},{
  "id": 5,
  "group": 5,
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
  console.log(`action.type = ${action.type}`)
	switch(action.type){
	case constants.SET_VALUE_TO_EDITOR:
		console.log(`SET_VALUE_TO_EDITOR ${JSON.stringify(action.payload)}`)
		//return { ...payload.member }
		//return { ...state, editor: payload.editor};
		return { ...state, editor: action.payload.editor};
	// return { ...state, ...newState }
	case constants.SET_VALUE_TO_TABLE:
    //let members: Member[] = mockData;
    let edited = action.payload.edited;
    let members: Member[] = [edited, edited, edited];
		console.log(`SET_VALUE_TO_TABLE: ${JSON.stringify(action.payload)}`)
    console.log(`edited ${edited}`)
		return { ...state, members: members };
		//return { ...state, members: action.payload.edited};
		//return { ...state, edited: action.payload.edited};

	default:
		console.log(`default ${JSON.stringify(state)}`)
		return state
	}

}
