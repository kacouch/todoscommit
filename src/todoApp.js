/*
*One neat trick is to use the ES6 default arguments syntax to write this in a more compact way:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/default_parameters
* */

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