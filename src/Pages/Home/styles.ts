import styled from 'styled-components';

export const Container = styled.div`
  height: 80%;

`;

export const Paintings = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding : 0 216px 0 113px;

  svg{
    position: relative;
    top: 7px;
    cursor: pointer;

    &:hover{
      opacity: 0.9;
      left: 2px;
    }
  }

`  
export const Title = styled.h1`
  font-weight: 400;
  font-size: 2rem;
  line-height: 56px;

  color: #161412;

`