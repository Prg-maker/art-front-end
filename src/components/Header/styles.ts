import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
`;

export const Logo = styled.img`
  min-height: 28px;
  min-width: 154px;
  max-height: 28px;
  max-width: 154px;
  margin-right: 20px;
`
export const ListProducts = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;

  li:not(:last-child){
    cursor: pointer;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    color: #161412;
    overflow-x: hidden;

    &:hover , &.active{
      border-bottom: 2px solid #161412;
    }
  }
  
`


export const Icons = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 4px;
  gap: 30px;


  svg{
    cursor: pointer;
  }
  
`
