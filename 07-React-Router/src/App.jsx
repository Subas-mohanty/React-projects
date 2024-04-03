import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import Contact from "./components/Header/Contact"
import About from "./components/Header/About"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Layout from "./Layout"
import User from "./components/User/User"
import Github from "./components/Github/Github"

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        {/* <Route path="/" element = {<Layout />} /> */}
        <Route path="/" element = {<Layout />} >
          <Route path="" element = {<Home />} />
          <Route path="/About" element = {<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path='user/:userId' element = {<User />} />
          <Route path='/github' element = {<Github/>} />
        </Route >
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
