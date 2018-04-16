/*
*This is called reducer composition, and it's the fundamental pattern of building Redux apps.
*
*
* Note that todos also accepts state—but it's an array!
* Now todoApp just gives it the slice of the state to manage,
 * and todos knows how to update just that slice.
  * This is called reducer composition, and it's the fundamental
   * pattern of building Redux apps.
*
* */

import { VisibilityFilters } from './actions';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions';
​
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
};​​

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index === action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo
            })
        default:
            return state
    }
}
​
function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        default:
            return state
    }
}
export default todoApp;