import styled from 'styled-components';
import Image from "../../assets/bbq.png"


export const Container = styled.div`
  height:100vh;
  width:100vw;
  background: #FFD836;
`;

export const Form = styled.form `
  position:relative;
  display: flex;
  align-items: center;
  flex-direction:column;
  z-index:22;
  top:14em;
  div{
    display: flex;
    flex-direction:column;
    padding:2vh;


    label{
      margin-bottom:10px;
    }
    input{
      width: 282px;
      height: 50px;
      background: #FFFFFF;
      border-radius: 2px;
      border:none;
      text-indent: 20px;
    }

    button{
      width: 282px;
      height: 50px;
      background: #000000;
      border-radius: 18px;
      border:none;
      color:#ffff
    }
  }
`