/*
Let's explore reducer composition more.
Can we also extract a reducer managing just visibilityFilter? We can.

Below our imports, let's use ES6 Object Destructuring to declare SHOW_ALL:
* */

import { VisibilityFilters } from './actions';
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions';
​
const { SHOW_ALL } = VisibilityFilters

/*
 Now we can rewrite the main reducer as a function that calls
 the reducers managing parts of the state, and combines them into
 a single object.
 >>>>>>>>>>>>>>It also doesn't need to know the complete initial
 state anymore. It's enough that the child reducers return their
 initial state when given undefined at first. <<<<<<<<<<<<<<<<<<<<<
*/

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
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
​
function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}

export default todoApp;