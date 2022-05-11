import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  gap: 5px;
`;

export const Image =styled.img`
  padding-bottom: 15px;
` 
export const Title =styled.strong`
  font-size: 16px;
  line-height: 24px;

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