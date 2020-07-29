import React,{ useState } from 'react';
import swal from 'sweetalert';
import axios from "../../services/api"
import history from '../../services/history';
import { Container,Form } from './styles';
import "../../components/animations/fadein.css"


const Auth = () => {
  const[auth,setAuth] = useState({name:'',email:'',password:''})
  const[signUp,setSignUp] = useState(false)

  const handleSubmitForm= async (e)=>{
    e.preventDefault()
    if(signUp){
      handleSubmit()
      return
    }
    handleSignIn()
  }

  const changeSubmitEvent = () => {
    setSignUp(!signUp)
  }
  
  const handleChangeInput = (e) =>{
    setAuth({...auth,[e.target.name]:e.target.value})
  }

  const handleSignIn = async() =>{
    const{email,password} = auth
    try{
      const httpResponse = await axios.post('/login',{email,password})
      swal({
        title: "Oba!",
        text: "Seu login foi realizado com sucesso",
        icon: "success",
      }).then(res=>{
        localStorage.setItem("@churras-auth",httpResponse.data.access_token)
        if(res){
          history.push('/churras')
        }
      })
    }catch(err){
      swal("Opss!", "Parece que suas credenciais não bateram, tente novamente ... ", "error");
    }
  }

  const handleSubmit = async() =>{
    const{email,password,name} = auth
    try{
      await axios.post('/signup',{email,password,name})
      swal({
        title: "Bem vindo coleguinha!",
        text: "Você acabou de entrar pra gangue!",
        icon: "success",
      }).then(res=>{
        setAuth({...auth,password:''})
        changeSubmitEvent()
      })
    }catch(err){
      swal("Vixi...!", "Preenche os campos direitinho ai vai ... ", "error");
    }
  }

  

  return (
    <Container>

      <Form onSubmit={handleSubmitForm} className="fadeIn">
        {signUp  &&(
          <div className={"fadeIn"}>
            <label htmlFor="">Nome</label>
            <input 
              name="name" 
              required 
              onChange={handleChangeInput} 
              type="string"
              value={auth.name}
              placeholder="name"/>
          </div>
        )}
        <div>
          <label htmlFor="">Login</label>
          <input
            name="email" 
            required 
            onChange={handleChangeInput} 
            type="email" 
            autoComplete="off"
            value={auth.email}
            placeholder="e-mail"/>
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input 
            name="password" 
            required 
            onChange={handleChangeInput} 
            type="password" 
            value={auth.password}
            placeholder="senha"/>
        </div>
          <label 
            htmlFor="" 
            onClick={changeSubmitEvent} 
            style={{color:"#423d12",margin:"10px",cursor:"pointer"}}>{!signUp ? "Cadastre-se" : "login"}</label>
        <div>
          <button>{!signUp ? "Entrar" : "Cadastrar"}</button>
        </div>
      </Form>
    </Container>
  )
}

export default Auth;