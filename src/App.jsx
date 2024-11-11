import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer"
import Register from './Components/RegisterPage/Register'
import Login from './Components/Login/Login'

const App = () => {
  return(
    <>
    <Navbar/>
    {/* <Home/> */}
    {/* <Register/> */}
    <Login/>
    <Footer />
    </>
  )
}
export default App