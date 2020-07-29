import React, { useState } from "react";

import {Container,Card,Form,InputMaskCustom,ToggleArea,Input,CurrencyInputCustom,TextArea} from "./styles"
import Toggle from "../../../components/toggle"
import Axios from "../../../services/api";
import swal from "sweetalert";
import history from "../../../services/history";

const Churras = () => {
  const [formData,setFormData] = useState({
    name:'',
    date:'',
    obs:'',
    withDrink:false,
    description:'',
    suggestedValue:'',
    numberPeople:1
  })

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const payload = {...formData,date:formData.date.split('/').reverse().join('/')}
    try{
      await Axios.post("/event",payload)
      swal("Churras marcado!! ", "Agora  é só esperar o pessoal marcar", "success");
      history.push("/churras")

    }catch(err){
      console.log(err)
      swal("Opss!", "Parece que os dados foram preenchidos de forma errada, verique e tente novamente...", "error");
    }
  }

  const handleChange = (e) =>{
    if(e.target){
      setFormData({...formData,[e.target.name]:e.target.value})
      return
    }
    setFormData({...formData,suggestedValue:e})
  } 

  const handleChangeDrink = (drink) =>{
    setFormData({...formData,withDrink:!drink})
  } 

  const handleChangeCurrencyValue = (event, maskedvalue, floatvalue)=>{
    setFormData({...formData,suggestedValue:maskedvalue})
  }

  return (
    <Container>
      <Card>
        <p>Cadastrar novo Churras</p>

        <Form className="fadeIn" onSubmit={handleSubmit}>
          <div className={"fadeIn"}>
            <label htmlFor="">Nome</label>
            <Input 
              name="name" 
              required 
              value={formData.name}
              type="string"
              onChange={handleChange}
              placeholder="nome do churras"/>
          </div>
          <div >
            <label htmlFor="">Quantidade de pessoas</label>
            <Input 
              name="numberPeople" 
              required 
              value={formData.numberPeople}
              type="number"
              onChange={handleChange}
              placeholder="ex: 1"/>
          </div>
        
        <div>
          <label htmlFor="">Data do churras</label>
          <InputMaskCustom 
            value={formData.date}
            mask="99/99/9999" 
            onChange={handleChange}
            name="date"
            precision="10"
            placeholder="data do churras"/>
        </div>
        <div>
          <label htmlFor="">Valor do churras</label>
          <CurrencyInputCustom
            value={formData.suggestedValue}
            decimalSeparator="," 
            prefix="R$" 
            name="suggestedValue"
            onChange={handleChangeCurrencyValue}
            placeholder="data do churras"/>
        </div>
        <div>
          <label htmlFor="">Observacao</label>
          <Input 
            name="obs" 
            value={formData.obs}
            onChange={handleChange}
            placeholder="obs..."/>
        </div>
        <ToggleArea style={{display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
          <label htmlFor="">Bebida inclusa</label>
          <Toggle 
            nameInpt="withDrink"
            inptValue={formData.withDrink}
            change={handleChangeDrink}

          /> 
        </ToggleArea>
        <div>
          <label htmlFor="">Descrição rapida</label>
          <TextArea
            type="text" 
            name="description" 
            onChange={handleChange}
            height="200px"
            value={formData.description}
            placeholder="descrição rapida"/>
        </div>
        <div>
          <button>Cadastrar</button>
        </div>
      </Form>
      </Card>
    </Container>
  );
};

export default Churras;
