import './App.css'
import Login from './views/Login'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ListOfTerms from './views/ListOfTerms'
import ListOfCourses from './views/ListOfCourses'
import ListOfGroups from './views/ListOfGroups'
import DashboardAdmin from './views/DashboardAdmin'
import DashboardProfessor from './views/DashboardProfessor'
import ListOfProfessors from './views/ListOfProfessors'
import AddTerm from './views/AddTerm'
import AddProfessor from './views/AddProfessor'
import AddGroup from './views/AddGroup'
import AddCourse from './views/AddCourse'
import { Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Login} exact />
            <Route path="/dashboardadmin" component={DashboardAdmin} />
            <Route path="/dashboardprofessor" component={DashboardProfessor} />
            <Route path="/terms" component={ListOfTerms} />
            <Route path="/courses" component={ListOfCourses} />
            <Route path="/groups" component={ListOfGroups} />
            <Route path="/professors" component={ListOfProfessors} />
            <Route path="/addnewterm" component={AddTerm} /> 
            <Route path="/addnewgroup" component={AddGroup} /> 
            <Route path="/addnewprofessor" component={AddProfessor} /> 
            <Route path="/addnewcourse" component={AddCourse} /> 
            <Route component={Error} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
