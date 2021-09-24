import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './components/pages/landing'
import Room from './components/pages/room'
import RoomList from './components/pages/roomList'
import { Routes } from './domain/router'

const App: FC = () => {
   return (
      <Router>
         <Switch>
            <Route exact path={Routes.landing.path}>
               <Landing />
            </Route>
            <Route exact path={Routes.roomList.path}>
               <RoomList />
            </Route>
            <Route exact path={Routes.room.path}>
               <Room />
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
