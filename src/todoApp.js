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
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}
export default todoApp;