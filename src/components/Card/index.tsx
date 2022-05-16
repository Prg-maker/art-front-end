import {Container, Image , Title , Artist , Details, PriceDetails, Price } from './styles'

import ImgTest from '../../assets/Painting.png'
import { Upload , ShoppingCart} from 'phosphor-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export function Card(){

  const [isOpenBuy , setIsOpenBuy] = useState(false)

  function ToggleIsOpenBuy(){
    setIsOpenBuy(!isOpenBuy)
  }

  return(
    <Container >
      <div className='image' onClick={ToggleIsOpenBuy}>
        <Image src={ImgTest} alt="ImgTest"/>
      </div>
      <Title>Wallowing Breeze</Title>
      <Artist>Hettie Richards</Artist>
      <Details>Oil on canvas, 2008</Details>

      {isOpenBuy && 
        <PriceDetails className='active'>
          <Price>
            $620
          </Price>

          <div>
            <Upload style={{
              background: '#E7E7E1',
              padding: 10,
              marginRight:8
            }} size={45} weight="regular" />


            <Link to="/details">
              <ShoppingCart style={{
                background: '#161412',
                color: 'white',
                padding: 10
              }} size={45} weight="regular" />
            </Link>

          </div>
        </PriceDetails>
      }
    </Container>
  )
}
