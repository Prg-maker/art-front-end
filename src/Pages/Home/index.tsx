import React from 'react';

import { Container , Paintings , Title } from './styles';
import {ArrowRight} from 'phosphor-react'
import { Cards } from '../../components/Cards';

export function Home() {
  return (
    <Container>
      <Paintings >
        <Title>Featured Paintings</Title>
        <ArrowRight  size={32}  weight="light"/>
      </Paintings>

      <Cards/>
    </Container>
  )
}
