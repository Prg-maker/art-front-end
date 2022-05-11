import {Container, Image , Title , Artist , Details,} from './styles'

import ImgTest from '../../assets/Painting.png'

export function Card(){
  return(
    <Container>
      <div className='image'>
        <Image src={ImgTest} alt="ImgTest"/>
      </div>
      <Title>Wallowing Breeze</Title>
      <Artist>Hettie Richards</Artist>
      <Details>Oil on canvas, 2008</Details>
    </Container>
  )
}
