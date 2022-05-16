import styled , {css}from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 704px;
`;
const styleColorText = css`
  color: #161412;

`

export const Right = styled.div`
  height: 100%;
  text-align: left;
  font-family: 'Karla';


  a{
    display: flex;
    align-items: center;
    text-decoration: none;

    cursor: pointer;
    gap:10px;
    ${styleColorText}
  }
` 


export const Title = styled.div`
  margin-top: 25px;
  font-size: 40px;
  line-height: 48px;
  ${styleColorText}

`

export const Artist = styled.p`
  padding-top: 8px;
  font-size: 21px;
  line-height: 25px;
  ${styleColorText}

`
export const Details = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #65635F;
  width: 25%;
  margin-top: 31px;
`
export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #65635F;
  width: 70%;
  margin-top: 24px;
  margin-bottom:31px;

`
export const Separete = styled.div` 
  width: 80%;
  border-bottom: 2px solid rgba(101, 99, 95, 0.6);
  margin-bottom: 26px;
  opacity: 0.5;
`

export const DetailsPay = styled.div`
`
export const Price = styled.strong`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #161412;
`
export const Location = styled.div`
  margin:12px 0;
  display: flex;
  align-items: center;
  strong{
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding-left: 7px;
    color: #65635F;

  }

`
export const Estimed = styled.div`
  display: flex;
  align-items: center;
  strong{
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    padding-left: 7px;
    color: #65635F;

  }
`
export const Button = styled.div`
`
export const Footer = styled.div`
`

