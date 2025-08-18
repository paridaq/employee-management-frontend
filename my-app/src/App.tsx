
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './Home'
import NoMatch from './nomatch/NoMatch'
import Dashboard from './dashboard/Dashboard'
import PostUser from './employee/PostUser'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path = "*" element = {<NoMatch/>}/>
        <Route path = "/dashboard" element= {<Dashboard/>}/>
        <Route path="employee" element= {<PostUser/>}/>
      </Routes>
    </>
  )
}

export default App
