import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  gap: 5px;
  cursor: pointer;
 
`;

export const Image =styled.img`
  padding-bottom: 15px;
` 
export const Title =styled.strong`
  font-size: 16px;
  line-height: 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
  color: #161412;

`  
export const Artist =styled.strong`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;

  color: #65635F;

`  
export const Details =styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #65635F;
  font-style: italic;

`

export const PriceDetails = styled.div`
    visibility: hidden ;
    position: absolute;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  40px   20px;
  border-bottom: 2px solid black;

  &.active{
    visibility: visible ;
    position: relative;

  }

`

export const Price = styled.strong`




  font-family: 'Karla';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #161412;
`


