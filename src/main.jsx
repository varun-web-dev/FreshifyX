import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../src/redux/store.js'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
)
