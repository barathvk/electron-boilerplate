import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import './styles/main.sass'
import { Provider } from 'mobx-react'
import Store from './store'
const store = new Store()
store.load()
const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default
    render(NextApp)
  })
}
