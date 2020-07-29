import axios from 'axios';
import swal from 'sweetalert';


const AUTH_TOKEN = localStorage.getItem('@churras-auth')



const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  

});

api.interceptors.request.use(async config => {
  const token = localStorage.getItem('@churras-auth');
  if (token) {
      config.headers.Authorization = `${token}`;
  }
  return config;
});


api.interceptors.response.use(async response => {
  return response;
}, error => {
  if (error.response.status === 401 && error.response.data.type === "INVALID_TOKEN") {
      swal({
          title: "Opa, parece que tem algo errado",
          text: "Parece que não detectamos o seu login, poderia realizado novamente? ",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#DD6B55",
          confirmButtonText: "Sim",
          closeOnConfirm: false
      }).then(()=>{
          localStorage.removeItem("@churras-auth")
          window.location = '/';
      });
      return;
  }
  return Promise.reject(error);
});



export default api;
