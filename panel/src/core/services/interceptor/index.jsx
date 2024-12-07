import axios from "axios";
import { getData } from "./../../storage/localStorage.storage";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
});

const onSuccess = (response) => {
  return response.data
}

const onError = (err) => {
  console.log(err);
  if(err.name === "AxiosError")warnNotify("مشکلی به وجود آمده لطفا دوباره وارد حساب خود شوید")
  if(err.response.status >= 400 && err.response.status < 500){
     alert('client error: ' + err);
  }
  return Promise.reject(err)
}
instance.interceptors.response.use(onSuccess,onError) 

instance.interceptors.request.use((opt)=>{
  const token = getData('login')
  opt.headers.Authorization = 'Bearer ' + token 
  return opt 
}) 


// const onSuccess = (response) => {
//   return response.data;
// };
// const onError = (err) => {console.error(err);};
// instance.interceptors.response.use(onSuccess, onError);

export default instance;