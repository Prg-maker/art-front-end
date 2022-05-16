import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *,button , input{
    font-family: 'Inter', sans-serif;

    overflow-y: hidden;

  }
  html , body ,#root{
    height:100vh;
    overflow-y: none;

  }
  button, input {
    outline: none;
    border:none;
  }
  label{
    visibility: hidden ;
    position: absolute;
  }
`