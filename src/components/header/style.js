import styled from 'styled-components';
import Image from "../../assets/bbq.png"


export const Header = styled.div`
 
  display: flex;
  justify-content: center;
  background: url(${Image})  center;
  background-color: #FFD836;
  height:30vh;
  position:absolute;
  width:100%;
  z-index:1;

  p{
    font-weight:800;
    font-size:32px;
    color: #000000;
    line-height: 38px;
    padding-top: 3em;
  }

`