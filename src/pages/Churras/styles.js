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
  background : ${props =>(props.bgColor ? props.bgColor :"#FFFFFF")};
  top:14em;
  z-index:2;
  width: 40%;
  height: 250px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);

  display:flex;
  flex-direction:column;
  
  h1{
    padding:5%;
  }

  p{
    margin-left:5%;
    color: rgba(0, 0, 0, 0.8);
  }

  

` 


export const CardFooter = styled.div`
  display:flex;
  padding:5%;
  height:100%;

  div{
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;

    p{
      display:flex;
      img{
        margin-right: 10px;
      }
    }
  }

`


export const PowerCircle = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100%;
  width:100%;
  flex-direction:column;
  div{
  
    background-color:#FFD836;
    border-radius:50%;
    display:flex;
    height:50%;
    width:25%;

    justify-content:center;
    align-items:center;
    
  }
  h1{
    padding:5%;
    font-size: 24px;
  }
`