import { Route, Routes } from "react-router-dom"
import Home from "./assets/pages/Home/home"
import Contact from "./assets/pages/Contact/contact"
import Services from "./assets/pages/Services/services"
import Layout from "./components/Layout/layout"
import Service from "./assets/pages/Service/service"

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home title={"Home Page"}/>}/>
          <Route path="/contact" element={<Contact title={"Contact Page"}/>}/>
          <Route path="/services" element={<Services title={"Services Page"}/>}>
            <Route path="car-wash" element={<Service type="car-wash" />}/>
            <Route path="dog-wash" element={<Service type="dog-wash" />}/>
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
