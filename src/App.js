import './App.css'
import Login from './views/Login'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import ListOfProfessors from './views/ListOfProfessors'
import ListOfCourses from './views/ListOfCourses'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Login></Login>
      <Sidebar></Sidebar>
      <ListOfProfessors></ListOfProfessors>
    </div>
  )
}

export default App
