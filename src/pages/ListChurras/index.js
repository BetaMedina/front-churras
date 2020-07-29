import React, { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import Radio from "../../components/radio"
import {Container,Card,List,DivDeleteButtonContainer,DivInsertMemberButtonContainer,Button} from "./styles"
import Axios from "../../services/api"
import swal from "sweetalert"
import history from "../../services/history";
const Churras = () => {
  const[listUsers,setListUsers]= useState([])
  const[idUsers,setIdUsers]= useState([])
  const[users,setUsers]= useState([])

  const{id} = useParams()

  useEffect(()=>{

    function GetAllUsers(){
      Axios.get(`/user/event/${id}`).then(({data})=>{
        setListUsers(data)
        setUsers(data.users)
      }).catch(err=>{
        console.log(err)
      })
    }

    GetAllUsers()
  },[id])


  const formatData = (date)=>{
    return new Date(date).toLocaleDateString(undefined,{day: 'numeric', month: 'numeric'})
  }

  const radioClick = (idRadio)=>{
    const filter = idUsers.filter(id  => id === idRadio)

    if(!filter.length){
      setIdUsers([...idUsers,idRadio])
      return; 
    }
    setIdUsers(idUsers.filter(id  => id !== idRadio))
  }

  const handleAlertModal = () => {
    swal({
      title: "Tem certeza disso?",
      text: "Tem certeza mesmo que deseja retirar os amiguinhos do churras ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then( async (willDelete) => {
      if (willDelete) {

        try{

         await handleDeleteUsers()
         
         swal("Vamos sentir falta deles por aqui...", {
           icon: "success",
         });
       
        }catch(err){
          swal("Opss...", "Parece que tivemos um erro ao deletar os amiguinhos...","error");
        }

      } else {
        swal("Ufa... quase pensei que você faria isso");
      }
    });
  }

  const handleDeleteUsers = ()=>{
    Axios.post('/user/events',{idUsers,idEvent:id}).then(({data})=>{

      const usersAfterDelete = users.filter(({id}) => !idUsers.includes(id))

      setUsers(usersAfterDelete)
      idUsers([])

    }).catch(err=>{
      throw new Error()
    })
  }

  return (
    <Container>
      {idUsers.length && (
        <DivDeleteButtonContainer>
          <button onClick={()=>handleAlertModal()}>Excluir amiguinho</button>
        </DivDeleteButtonContainer>
      )}
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
          <List >
            {users.map(user=>(
              <li key={user.id} >
                <div onChange={()=>radioClick(user.id)}>
                  <Radio  name="test">{user.name}</Radio>
                </div>
                <p>R$ {user.UserEvent.payment_value}</p>   
            </li>
            ))}
          </List>
        )}

      </Card>
    

      <DivInsertMemberButtonContainer>
        <Button bgColor="#000000" onClick={()=>history.push(`/`)}>Voltar</Button>

        <Button onClick={()=>history.push(`/add-member/${id}`)}>Adicionar Amiguinho</Button>
      </DivInsertMemberButtonContainer>
    </Container>
  );
};

export default Churras;
