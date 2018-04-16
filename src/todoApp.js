/*
 Finally, Redux provides a utility called combineReducers()
  that does the same boilerplate logic that the todoApp above
   currently does. With its help, we can rewrite todoApp like this:

 import { combineReducers } from 'redux'
 ​
 const todoApp = combineReducers({
                visibilityFilter,
                todos
                })
 ​
 export default todoApp
* */

/*
*
*You could also give them different keys, or call functions differently. These two ways to write a combined reducer are equivalent:

 const reducer = combineReducers({
 a: doSomethingWithA,
 b: processB,
 c: c
 })

 function reducer(state = {}, action) {
 return {
 a: doSomethingWithA(state.a, action),
 b: processB(state.b, action),
 c: c(state.c, action)
 }
 }
*
*
*
*
* */
import { combineReducers } from 'redux'
import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

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

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp