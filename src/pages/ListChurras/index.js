import React from "react";

import Radio from "../../components/radio"
import {Container,Card,List,Input} from "./styles"
const Churras = () => {
  return (
    <Container>
      <Card>
        <div>
          <h1>01/12</h1>
          <p>15</p>
        </div>
        <div>
          <h1 color="subtext">Niver do Gui</h1>
          <p>R$280</p>
        </div>

        <List>
          <li>
            <div>
              <Radio name="test">Teste</Radio>
            </div>
            <p>R$ 20,00</p>   
          </li>
          <li>
            <div>
              <Radio name="test">Teste</Radio>
            </div>
            <p>R$ 20,00</p>   
          </li>
          <li>
            <div>
              <Radio name="test">Teste</Radio>
            </div>
            <p>R$ 20,00</p>   
          </li>
        </List>
        
      </Card>
    </Container>
  );
};

export default Churras;
