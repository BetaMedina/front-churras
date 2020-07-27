import styled from 'styled-components';
import InputMask from 'react-input-mask';
import CurrencyInput from 'react-currency-input';

export const Container = styled.div`
   display:flex;
    justify-content:center;
`;
export const Card = styled.div`
  cursor:pointer;
  margin-top:2%;
  margin-right:4%;
  position:relative;
  background : ${props =>(props.bgColor ? props.bgColor :"#FFFFFF")};
  top:14em;
  z-index:2;
  width: 60%;
  height: 100vh;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);

  display:flex;
  flex-direction:column;
  align-items:center;

  h1{
    padding:5%;
  }

  p{
    padding:10px;
    font-size:20px;
    color: rgba(0, 0, 0, 0.8);
  }
`

export const Form = styled.form `
  position:relative;
  display: flex;
  flex-direction:column;
  padding-top:4%;
  
  div{
    display: flex;
    flex-direction:column;
    padding:2vh;


    label{
      margin-bottom:10px;
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

export const Input  = styled.input`
  width: 282px;
  height: 50px;
  background: #f2f0f0;
  border-radius: 2px;
  border:none;
  text-indent: 20px;
`
export const TextArea  = styled.textarea`
  height: 200px;
  background: #f2f0f0;
  border-radius: 2px;
  border:none;
  font-family:'Raleway', sans-serif;
  padding: 10px;
  `

export const InputMaskCustom  = styled(InputMask)`
  width: 282px;
  height: 50px;
  background: #f2f0f0;
  border-radius: 2px;
  border:none;
  text-indent: 15px;
`

export const CurrencyInputCustom  = styled(CurrencyInput)`
  width: 282px;
  height: 50px;
  background: #f2f0f0;
  border-radius: 2px;
  border:none;
  text-indent: 20px;
`

export const ToggleArea = styled.div`
display: flex;
flex-direction: row;

`;
