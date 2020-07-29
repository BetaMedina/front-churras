import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
`;


export const CardContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  width:100%;
  justify-content:flex-start;
  padding-left:20%;
`;

export const DivDeleteButtonContainer = styled.div `
  display:flex;
  justify-content:flex-end;
  width: 56%;
  
  button{
    z-index:3;
    position:relative;
    background : #FFFFFF;
    top:11em;
    width: 282px;
    height: 50px;
    background: #ff6347;
    border-radius: 18px;
    border:none;
    color:#ffff;
  }
` 

export const DivInsertMemberButtonContainer = styled.div `
  display:flex;
  justify-content:space-between;
  width: 50%;
  
  
` 


export const Button = styled.button`
    z-index:3;
    position:relative;
    background : #FFFFFF;
    top:11em;
    margin:0;
    width: 30%;
    height: 50px;
    background: ${props => props.bgColor ? props.bgColor: "#aef359"} ;
    border-radius: 18px;
    border:none;
    color:#ffff;

`

export const Card = styled.div`
  cursor:pointer;
  display:flex;
  padding:3%;
  margin-top:2%;
  position:relative;
  background : #FFFFFF;
  top:11em;
  z-index:2;
  width: 60%;
  height: auto;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);

  display:flex;
  flex-direction:column;
  margin-bottom:20px;
  
  h1{
    color:#000;
    font-size: 28px;
    margin-top:3%;

  }

  
  div{
    display:flex;
    justify-content:space-between;
    height:15%;

  h1{
    color: rgba(0, 0, 0, 0.8);
  }
  
  p{
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
    margin-top:3%;

  }

  }

`;


export const List = styled.ul`
  list-style:none;
  margin-top:3%;

  li{
    display:flex;
    justify-content:space-between;
    border-bottom:  1px solid #E5C231;
    margin: 1% 0 1% 0;

    p{
      padding-bottom:4px;
      color: rgba(0, 0, 0, 0.8);
    }

  }

` ;