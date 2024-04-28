import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Home} from "./pages/Home/Home"
import { Users } from "./pages/Users/Users"
import Main from "./pages/Main/Main"
import { UserDetilezi } from "./pages"

const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Main/>}>
            <Route path="/" element={<Home />} />
            <Route path="/Users" element={<Users/>} />  
            <Route path="/users/:id" element={<UserDetilezi/>} />  
            <Route path="/*" element={<div>not faunt</div>}/>
            </Route> 
        </Routes>
    </Router>
  )
}

export default App