import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import * as serviceWorker from './serviceWorker'
import { I18nextProvider } from 'react-i18next'
import store, { history as browserHistory } from './store'
import Routes from './Routes'
import Home from './Components/Home'
import i18n from './i18n'
import GlobalFonts from './assets//fonts/fonts'

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router history={browserHistory}>
          <Home>
            <Routes />
          </Home>
        </Router>
      </I18nextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
