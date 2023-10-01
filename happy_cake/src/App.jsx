
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from "./views/Home"
import Contacto from './views/Contact'
import NotFound from './views/NotFound'

export const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/"
          element={<Home />}
        />
        <Route
          path="/contacto" 
          element={<Contacto />}
        /> 
        <Route
          path="*" 
          element={<NotFound />}
        /> 
        </Routes>

    </div>

  )
}

export default App
