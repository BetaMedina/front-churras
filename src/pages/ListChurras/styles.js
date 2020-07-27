import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  justify-content:center;
`;


export const CardContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  width:100%;
  justify-content:flex-start;
  padding-left:20%;
`;

export const Card = styled.div`
  cursor:pointer;
  display:flex;
  margin-top:2%;
  margin-right:4%;
  position:relative;
  background : #FFFFFF;
  top:14em;
  z-index:2;
  width: 60%;
  height: auto;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);

  display:flex;
  flex-direction:column;
  
  h1{
    padding:5%;
    color:#000;
    font-size: 28px;
  }

  
  div{
    display:flex;
    justify-content:space-between;
    height:22%;

  h1{
    color: rgba(0, 0, 0, 0.8);
  }
  
  p{
    padding:8%;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.8);
  
  }

  }

`;


export const List = styled.ul`
  list-style:none;
  margin-top:5%;
  padding:5%;
  

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