/*********/
import { getVisibleTodos } from '../selectors'
/*********/
import { toggleTodo } from '../actions/index'
import TodoList from '../components/TodoList'




/*
 https://workflowy.com/#/d55c608528f1
* Now it's time to hook up those presentational components to Redux
 * by creating some containers. Technically, a container component
  * is just a React component that uses store.subscribe() to read a
  * part of the Redux state tree and supply props to a presentational
   * component it renders
   *
   *https://workflowy.com/#/10e3a212a6bc
   * You could write a container component by hand,
    * but we suggest instead
    * generating container components with the React
     * Redux library's connect() function, which provides
      * many useful optimizations to prevent unnecessary re-renders.
*/
import { connect } from 'react-redux';







/*
* first container component and explanation from workflowy
* https://workflowy.com/#/3d9010b2fa1c
*
* #VisibleTodoList(container component) needs to calculate
 * #todos(objekty todos) to pass to the #TodoList(presentional
  * component), so we define a function that filters the
   * state.#todos according to the state.#visibilityFilter,
    * and use it in its
    * #mapStateToProps:
**/
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state)
    }
}



/*
 * https://workflowy.com/#/c2bcb32a43b0
 * In addition to reading the state, container components can
 * dispatch action
 **
 *
 * In a similar fashion, you can define a function called
  * #mapDispatchToProps() that receives the #dispatch()
   * method and returns callback props that you want to inject into
    * the presentational component.
 *
 *
 *  we want the #VisibleTodoList to inject a prop called
  *  #onTodoClick into the #TodoList component, and we want
   *  #onTodoClick to dispatch a TOGGLE_TODO action:
 * */
/*
 const mapDispatchToProps = dispatch => {
        return {
            onTodoClick: id => {
            dispatch(toggleTodo(id))
            }
        }
    }
 ​
 */

const mapDispatchToProps = {
    onTodoClick: toggleTodo
}



/*
////Finally, we create the VisibleTodoList by calling connect()
// and passing these two functions:
*/
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList;
