import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
/*
 All container components need access to the Redux store so they can
  subscribe to it. One option would be to pass it as a prop to every
   container component. However it gets tedious, as you have to wire
    store even through presentational components just because they
     happen to render a container deep in the component tree.

 The option we recommend is to use a special React Redux
 component called <Provider> to magically make the store available
 to all container components in the application without passing
 it explicitly. You only need to use it once when you render the
 root component:
*/
let store = createStore(todoApp);


render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)