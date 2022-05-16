import GlobalStyles from './styles/GlobalStyles'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Home } from './Pages/Home'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { DetailsArt } from './Pages/DetailsArt'


function App() {

  return (
    <>  
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details' element={<DetailsArt/>}/>
        </Routes>
      </BrowserRouter>

      <GlobalStyles/>

    </>
  )
}

export default App
