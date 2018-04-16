/*
 * This is the first idea about reducer and related shape of state
 * todoApp is here first version of reducer.
 *
 *  init state is here:
 * const initialState = {
 *    visibilityFilter: VisibilityFilters.SHOW_ALL,
 *    todos: []
 * }
 *
 * sample of state

 {
 visibilityFilter: 'SHOW_ALL',
 todos:[
 {
 text: 'Consider using Redux',
 completed: true,
 },
 {
 text: 'Keep all state in a single tree',
 completed: false
 }
 ]
 }*/

import { VisibilityFilters } from './actions';
​
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}
​
function todoApp(state = initialState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    return state
}
export default todoApp;
