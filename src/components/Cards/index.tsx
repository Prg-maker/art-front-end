import { CaretRight , CaretLeft } from 'phosphor-react'
import { Card } from '../Card'
import {Container} from './styles'

export function Cards(){




  return(
    <Container className='test'>


      <a  href="#page-1" className='left '>
        <CaretLeft  size={42} weight="light" />
      </a>

      <div className='cards'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        <div id='#page-1'>
          <Card/>
        </div>

      </div>

      <a  href="#page-1" className='right'>
        <CaretRight  size={42} weight="light" />
      </a>

    </Container>
  )
}
