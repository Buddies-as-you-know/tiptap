import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './components/pages/landing'
import Theme from './components/pages/theme'
import ThemeList from './components/pages/themeList'
import { Routes } from './domain/router'

const App: FC = () => {
   return (
      <Router>
         <Switch>
            <Route exact path={Routes.landing.path}>
               <Landing />
            </Route>
            <Route exact path={Routes.themeList.path}>
               <ThemeList />
            </Route>
            <Route exact path={Routes.theme.path}>
               <Theme />
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
