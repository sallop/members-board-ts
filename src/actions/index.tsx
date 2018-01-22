import * as constants from '../constants';
import { Member } from '../types/index';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
//import thunk, { ThunkAction } from '../index.d.ts'; import fetch
//from 'cross-fetch'; import fetch from 'whatwg-fetch';
import 'whatwg-fetch';
// import { createAction } from 'redux-actions' export const addTodo =
// createAction<TodoItemData>(Actions.ADD_TODO); export const editTodo
// = createAction<TodoItemData>(Actions.EDIT_TODO); createActions({
// ADD_TODO: todo => ({ todo }), REMOVE_TODO: [ todo => ({ todo }),
// (todo, warn) => ({ todo, warn }) ] });


//export interface IncrementEnthusiasm { type:
//constants.INCREMENT_ENTHUSIASM; }
//
//export interface DecrementEnthusiasm { type:
//constants.DECREMENT_ENTHUSIASM; }
//
//export type EnthusiasmAction = IncrementEnthusiasm |
//DecrementEnthusiasm;
//
//export function incrementEnthusiasm(): IncrementEnthusiasm { return
//{ type: constants.INCREMENT_ENTHUSIASM } }
//
//export function decrementEnthusiasm(): DecrementEnthusiasm { return
//{ type: constants.DECREMENT_ENTHUSIASM } }

export interface SetValueToEditor {
  //type: constants.SET_VALUE_TO_EDITOR as typeof SET_VALUE_TO_EDITOR;
  type: constants.SET_VALUE_TO_EDITOR; payload: { editor: Member };
  error?: boolean;
}

export interface SetValueToTable {
  //type: constants.SET_VALUE_TO_TABLE as typeof SET_VALUE_TO_TABLE;
  type: constants.SET_VALUE_TO_TABLE; payload: { edited: Member };
  //payload: { members: Member[] }; payload: object;
  error?: boolean;
}

export interface ChangeValueInEditor {
  type: constants.CHANGE_VALUE_IN_EDITOR;
  //payload: { changed: Member };
  payload: { name: any, value: any };
  error?: boolean;
}

//export type Action = SetValueToEditor | SetValueToTable |
//ChangeValueInEditor;
export interface FetchMembers {
  type: constants.FETCH_MEMBERS;
  payload: {
    status: string,
    members: any;
  };
  error?: boolean;
}

export type Action = SetValueToEditor | SetValueToTable |
  ChangeValueInEditor | FetchMembers;

////http://www.mattgreer.org/articles/typescript-react-and-redux/
//interface Action<T> { type: string; payload: T; error?: boolean;
//meta?: any; } export default Action; { FSA type: 'SET_VALUE_TO_*',
//payload: new Error(), error?: true }
export function setValueToEditor(editor: Member) : Action {
  console.log(`setValueToEditor = ${JSON.stringify(editor)}`);
  return {
    type: constants.SET_VALUE_TO_EDITOR,
    payload: { editor }
  };
}

//export function setValueToTable(members: Member[]) : Action {
export function setValueToTable(edited: Member) : Action {
  console.log(`setValueToTable = ${JSON.stringify(edited)}`);
  return {
    type: constants.SET_VALUE_TO_TABLE,
    payload: { edited }
    // NOTE: type information `id:number` is deleted
  }
}

//export function changeValueInEditor(changed: Member) : Action {
export function changeValueInEditor(name: any, value: any) : Action {
  //console.log(`changeValueInEditor ${JSON.stringify(changed)}`);
  console.log(`changeValueInEditor ${name} ${value}`);
  return {
    type: constants.CHANGE_VALUE_IN_EDITOR,
    //payload: { changed }
    payload: { name, value }
  }
}

//export function fetchMembers(): any { return function(dispatch:
//any): any {
export function fetchMembers( members: any ):
ThunkAction<Promise<string>, Action, null> {

  return function(dispatch: Dispatch<Action>): any {
    console.log(`fetchMembers`);
    //console.log(`dispatch = ${dispatch}`);
    dispatch({
      type: constants.FETCH_MEMBERS,
      payload: {
        status: 'request',
        members: {}
      }
    });
 
    //return fetch(`http://localhost:3000/mockDat.json`) //Unhandled Rejection (SyntaxError):
    //return fetch(`/mockData.json`) // OK
    //return fetch(`mockData.json`) // OK
    //return fetch(`mockDatum.json`) // NG
    return fetch(`http://localhost:3000/mockData.json`)
      .then( response => {
        if (!response.ok) {
          //NOTE: https://www.tjvantoll.com/2015/09/13/fetch-and-errors/
          throw Error( response.statusText );
        }
        console.log(`response = ${JSON.stringify(response)}`)
        return response.json();
      },
      error => {
        console.log('An error occurred.')
        dispatch({
          type: constants.FETCH_MEMBERS,
          payload: {
            status: 'error',
            members: {}
          }
        });
      })
      .then( json => {
        console.log(`json = ${JSON.stringify(json)}`);
        dispatch({
          type: constants.FETCH_MEMBERS,
          payload: { 
            status: 'success',
            members: json
          }
        });
      })
          
    //return new Promise<string>((resolve, reject) => {
    //  resolve('done!');
    //});
  }
}
  // return (dispatch, getState) => { /*...*/ }

  // return new Promise<string>((resolve, reject) => {
  //   // do async stuff with getState() and dispatch(), then ...
  //   resolve('done!');
  // });

// https://github.com/gaearon/redux-thunk/issues/103
// dupski, cr0ck
// export interface IItem {
//   id: string;
// }
// 
// export type LoadItem<R> = (id: strinig) => R;
// 
// export const loadItem: LoadItem<ThunkAction<
//   <Promise<IItem>, IState, IExtraArgument>>> = (id) => {
//     return (dispatch<IState>, getState) => {
//     }
// };

// redux/examples/async
// const fetchPosts = subreddit => dispatch => {
//   dispatch( requestPosts(subreddit));
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//           .then( response => response.json() )
//           .then( json => dispatch( receivePosts(subreddit, json )))
// }

// export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
//   if (shouldFetchPosts( getState(), subreddit )) {
//     return dispatch( fetchPosts(subreddit) );
//   }
// }

