import React, { useState,useEffect } from "react";
import Axios from "../../services/api"
import {Container,Card,CardContainer,CardFooter,PowerCircle} from "./styles"
import Money from "../../assets/money.png"
import People from "../../assets/people.png"
import Churrasqueira from "../../assets/churras.png"
import history from "../../services/history";

const Churras = () => {
  const [event,setEvent] = useState([])
  useEffect(()=>{
    function getAllData(){
      Axios.get('/event').then(({data})=>{
        setEvent(data)
      }).catch(err=>{
        console.log(err)
      })
    }
    getAllData()
},[])

  const formatData = (date)=>{
    return new Date(date).toLocaleDateString(undefined,{day: 'numeric', month: 'numeric'})
  }

  return (
    <Container>
      <CardContainer>
        {event.map(res=>(
          <Card key={res.id} onClick={()=>history.push(`/list-churras/${res.id}`)}>
            <h1>{formatData(res.date)}</h1>
            <p>{res.name}</p>
            <p style={{marginTop:"20px",fontSize:"13px"}}> - {res.obs}</p>
            <p style={{marginTop:"20px",fontSize:"13px"}}> - Bebida Inclusa? {res.with_drink ? "Sim" : "Não"}</p>
            <CardFooter>
              <div>
                <p><img src={People} />{res.number_people}</p>
                <p><img src={Money} />R$ {res.suggested_value}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
        <Card bgColor={"#F1F1F1"} onClick={()=>history.push("/new-churras")}>
          <PowerCircle>
            <div>
              <img src={Churrasqueira}/>
            </div>
          <h1>Adicionar Churras</h1>
          </PowerCircle>
        </Card>
      
      </CardContainer>
    </Container>
  );
};

export default Churras;
