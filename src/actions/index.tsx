import * as constants from '../constants'
import { Member } from '../types/index'

// import { createAction } from 'redux-actions'
// export const addTodo = createAction<TodoItemData>(Actions.ADD_TODO);
// export const editTodo = createAction<TodoItemData>(Actions.EDIT_TODO);
// createActions({
//   ADD_TODO: todo => ({ todo }),
//   REMOVE_TODO: [
//     todo => ({ todo }),
//     (todo, warn) => ({ todo, warn })
//   ]
// });


//export interface IncrementEnthusiasm {
//  type: constants.INCREMENT_ENTHUSIASM;
//}
//
//export interface DecrementEnthusiasm {
//  type: constants.DECREMENT_ENTHUSIASM;
//}
//
//export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
//
//export function incrementEnthusiasm(): IncrementEnthusiasm {
//  return {
//    type: constants.INCREMENT_ENTHUSIASM
//  }
//}
//
//export function decrementEnthusiasm(): DecrementEnthusiasm {
//  return {
//    type: constants.DECREMENT_ENTHUSIASM
//  }
//}

export interface SetValueToEditor {
	//type: constants.SET_VALUE_TO_EDITOR as typeof SET_VALUE_TO_EDITOR;
	type: constants.SET_VALUE_TO_EDITOR;
	payload: { editor: Member };
	error?: boolean;
}

export interface SetValueToTable {
	//type: constants.SET_VALUE_TO_TABLE as typeof SET_VALUE_TO_TABLE;
	type: constants.SET_VALUE_TO_TABLE;
	payload: { edited: Member };
	//payload: { members: Member[] };
	//payload: object;
	error?: boolean;
}

export interface ChangeValueInEditor {
  type: constants.CHANGE_VALUE_IN_EDITOR;
  payload: { changed: Member };
  error?: boolean;
}

export type Action = SetValueToEditor | SetValueToTable | ChangeValueInEditor;

////http://www.mattgreer.org/articles/typescript-react-and-redux/
//interface Action<T> {
//  type: string;
//  payload: T;
//  error?: boolean;
//  meta?: any;
//}
//export default Action;
//{ FSA
//	type: 'SET_VALUE_TO_*',
//	payload: new Error(),
//	error?: true
//}
export function setValueToEditor(editor: Member) : Action {
  console.log(`setValueToEditor = ${JSON.stringify(editor)}`);
	return {
		type: constants.SET_VALUE_TO_EDITOR,
		payload: { editor }
	}
}

//export function setValueToTable(members: Member[]) : Action {
export function setValueToTable(edited: Member) : Action {
  console.log(`setValueToTable = ${JSON.stringify(edited)}`);
	return {
		type: constants.SET_VALUE_TO_TABLE,
		payload: { edited }
		//payload: { members }
	}
}

export function changeValueInEditor(changed: Member) : Action {
  console.log(`changeValueInEditor ${changed}`);
  return {
    type: constants.CHANGE_VALUE_IN_EDITOR,
    payload: { changed }
  }
}
