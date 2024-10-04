import Home from './pages/Home'
import Auth from './pages/Auth'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashbord from './pages/Dashbord'
import Projects from './pages/Projects'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth register={"register"}/>}/>
      <Route path='/dashboard' element={<Dashbord/>}/>
      <Route path='/project' element={<Projects/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>
     </>
  )
}

export default App
