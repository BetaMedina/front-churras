import React, { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import Radio from "../../components/radio"
import {Container,Card,List,Input} from "./styles"
import Axios from "../../services/api"

const Churras = () => {
  const[listUsers,setListUsers]= useState([])
  const{id} = useParams()

  useEffect(()=>{

    function GetAllUsers(){
      Axios.get(`/user/event/${id}`).then(({data})=>{
        setListUsers(data)
      }).catch(err=>{
        console.log(err)
      })
    }

    GetAllUsers()
  },[])

  const formatData = (date)=>{
    return new Date(date).toLocaleDateString(undefined,{day: 'numeric', month: 'numeric'})
  }

  return (
    <Container>
      <Card>
       
        <div>
          <h1>{formatData(listUsers.created_at)}</h1>
          <p>{listUsers.number_people}</p>
        </div>
        <div>
          <h1 color="subtext">{listUsers.name}</h1>
          <p>R$ {listUsers.suggested_value}</p>
        </div>
        {listUsers.users &&(
          <List>
            {listUsers.users.map(user=>(
              <li>
                <div>
                  <Radio name="test">{user.name}</Radio>
                </div>
                <p>R$ {user.UserEvent.payment_value}</p>   
            </li>
            ))}
          </List>
        )}
      </Card>
    </Container>
  );
};

export default Churras;
