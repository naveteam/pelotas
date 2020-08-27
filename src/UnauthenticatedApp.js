import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Login from 'routes/Login'

const UnauthenticatedApp = () => (
  <Switch>
    <Route path='/' component={Login} />
    <Redirect to='/' />
  </Switch>
)

export default UnauthenticatedApp
