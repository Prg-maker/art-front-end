import { Card } from '../Card'
import {Container} from './styles'
import Carousel from "react-elastic-carousel"; 
import { useState } from 'react';



export function Cards(){
  
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];



 

  return(
    <Container className='test'>

      <Carousel   className='cards'  breakPoints={breakPoints}>
        <Card   />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    


    </Container>
  )
}
