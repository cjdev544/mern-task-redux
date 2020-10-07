import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import CreateAccound from './components/auth/CreateAccound'
import Projects from './components/projects/Projects'
import { Provider } from 'react-redux'
import store from './store'
import sendTokenHeader from './config/sendTokenHeader'
import PrivateRoute from './components/routes/PrivateRoute'

const token = localStorage.getItem('token')
if(token) {
  sendTokenHeader(token)
}

function App() {
  return (
    <Router>
      <Provider store={ store }>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/crear-cuenta" component={ CreateAccound } />
          <PrivateRoute exact path="/proyectos" component={ Projects } />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
