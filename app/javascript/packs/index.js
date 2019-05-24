import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../components/App'

/* <App/> replaced with below now that we are using React-Router:

<Router>
  <Route path="/" component={App} />
</Router>

*/

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
