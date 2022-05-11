import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Home } from './Pages/Home'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


function App() {

  return (
    <>  
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>

      <GlobalStyles/>

    </>
  )
}

export default App
