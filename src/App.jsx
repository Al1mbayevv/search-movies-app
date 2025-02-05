import './App.css'
import { Routes, Route } from "react-router"
import Home from './components/home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } ></Route>
        <Route path='/movies' element={ <h1>Movies</h1> } ></Route>
      </Routes>
    </>
  )
}

export default App
