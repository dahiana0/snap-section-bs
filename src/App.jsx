
import { Header } from './components/Header.jsx'
import { Careers } from './Pages/Careers.jsx'
import { Home } from './Pages/Home'
import { About } from './Pages/About.jsx'
import { Login } from './Pages/Login.jsx'
import { Registre } from './Pages/Registre.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

export const App = () => {

  return (
    <>
      <BrowserRouter>
          <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='careers' element={<Careers/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='registre' element={<Registre/>}/>
          
        </Routes>
      
      </BrowserRouter>
    </>

  )
}