import React, { useState ,useEffect} from "react";

import {Container,Card,Form,CurrencyArea,CurrencyInputCustom} from "./styles"
import Axios from "../../services/api";
import swal from "sweetalert";
import history from "../../services/history";
import { useParams } from "react-router-dom";
import AsyncSelect from 'react-select/async';

const Churras = () => {
  const{id} = useParams()

  const [formData,setFormData] = useState({
    name:'',
    suggestedValue:''
  })

  const [event,setEvent] = useState({})
  const [users,setUsers] = useState([])
  const [value,setValue] = useState(0)
  const [selectedUser,setSelectedUser] = useState({})


  useEffect(()=>{
    Axios.get(`event/${id}`).then(({data})=>{
      setEvent(data)
      setValue((data.suggested_value/data.number_people).toFixed(2))
    }).catch(err=>{
      swal("Ops...!", "Não conseguimos pegar os dados do churras, tenten novamente mais tarde","error").then(()=>{
        history.push(`/churras`)
      })
    })

  },[id])


  const handleChangeCurrencyValue = (event, maskedvalue, floatvalue)=>{
    setValue(maskedvalue)
  }

  const filterInputOpt = (inputValue) => {
    return users.filter(i =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterInputOpt(inputValue));
    }, 1000);
  };

  const handleInputChange = (newValue) => {
    Axios.post('users',{name:newValue}).then(({data})=>{
      const options = data.map(({id,name})=>({
        value: id, label: name
      }))
      setUsers(options)
      return;
    })
  }


  const addUserInChurras = () =>{
    const body = {
      idUser: selectedUser.value,
      idEvent: id,
      paymentValue: value
    }
    return Axios.post('user/event',body).then(({data})=>{
      return true
    }).catch(err =>{
      throw new Error()
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    swal({
      title: `Deseja mesmo inserir o ${selectedUser.label} ?`,
      text: `Você está inserindo o: ${selectedUser.label}, com uma contribuição de - R$ ${value}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then( async (willDelete) => {
      if (willDelete) {

        try{

         await addUserInChurras()
         
         swal("Novo parça cadastrado no churras ! ", {
           icon: "success",
         });
         history.push(`/list-churras/${id}`)
        }catch(err){
          swal("Opss...", "Parece que tivemos um erro ao inserir os amiguinhos...","error");
        }

      } else {
        swal("Vixi... mas, beleza, convida o pessoal ai...");
      }
    });
  }

  return (
    <Container>
      <Card>
        <p>Adicionar novo Membro ao {event.name}</p>

        <Form className="fadeIn" onSubmit={handleSubmit} >
            <label htmlFor="">Nome da pessoinha</label>
          <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            onInputChange={handleInputChange}
            onChange={(val)=>setSelectedUser(val)}
          />
        <CurrencyArea>
          <label htmlFor="">Valor de contribuição <small style={{color:'red'}}>(Valor dividido está em: R$ {value})</small></label>
          <CurrencyInputCustom
            value={value}
            decimalSeparator="," 
            prefix="R$" 
            name="suggestedValue"
            onChange={handleChangeCurrencyValue}
            placeholder="data do churras"/>
          <button>Cadastrar</button>
        </CurrencyArea>
      </Form>
      </Card>
    </Container>
  );
};

export default Churras;
