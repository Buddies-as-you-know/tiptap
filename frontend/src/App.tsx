import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './components/pages/landing'

const App: FC = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/">
               <Landing />
            </Route>
            <Route>
               <NoMatch />
            </Route>
         </Switch>
      </Router>
   )
}

export default App

const NoMatch = () => <h2>Not Found</h2>
