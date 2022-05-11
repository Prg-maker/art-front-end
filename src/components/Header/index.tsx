import {
  Container,
  Icons,
  ListProducts,
  Logo
} from './styles'

import LogoPng from '../../assets/logo-cultured-kid.png'

import {MagnifyingGlass , ShoppingCart} from 'phosphor-react'

export function Header(){
  return (
    <Container>
      <Logo draggable={false} src={LogoPng} alt="art logo" />

      <ListProducts>
        <li>Paintings</li>
        <li>Drawings</li>
        <li className='active'>Sculpture</li>
        <li>Artists</li>
        <li>
          <Icons>
            <MagnifyingGlass size={20}  weight="regular"/>
            <ShoppingCart size={20} weight="regular" />
          </Icons>
        </li>

      </ListProducts>


    </Container>
  )
}
