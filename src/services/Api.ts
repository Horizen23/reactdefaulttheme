import { refreshToken } from './../features/user/action';
import axios,{AxiosInstance} from 'axios';
import store from '../store';
class Api {
    url: string = "http://localhost:5000";
    api:AxiosInstance;
    constructor(){
      this.api = axios.create({
        baseURL: "http://localhost:5000",
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.setup()

    }
    setup(){
        this.api.interceptors.request.use(
          (config:any) => {
            const {accessToken,refreshToken,islogin} = store.getState().user.auth;
            if (islogin) {
              // config.headers["Authorization"] = 'Bearer ' + token;  // for Spring Boot back-end
              config.headers["x-access-token"] = accessToken; // for Node.js Express back-end
              config.headers["x-auth-refresh-token"] = refreshToken; // for Node.js Express back-end
            }
            return config;
          },
          (error) => {
            return Promise.reject(error);
          }
        )
        this.api.interceptors.response.use(
            (res)=>res,
            async (err)=>{
              const { dispatch } =  store;
              const originalConfig = err.config;
              

              // Access Token was expired
              if(err.response.status===401&&err.response.data==='token expired'){
                if(!originalConfig._retyy){
                  originalConfig._retry = true;
                  try{
                    const rs = await this.api.post("/token");
                    const {accessToken} = rs.data
                    dispatch({type:refreshToken,payload:accessToken})
                    return this.api(originalConfig)
                  }catch(e){
                    return Promise.reject(e);
                  }
                }
              }else{

                // dispatch(Logout())
              }
              


            }
        )
    }
    dashboad():Promise<any>{
      return new Promise((res,rej)=>{
          this.api.post("/dashboad")
          .then((response) => {
            res(response)
          })
          .catch((error:Error)=>{
            rej(error)
          })
      })
    }
    login(email:string, password:string):Promise<any>{
      return new Promise((res,rej)=>{
          this.api.post("/login",{
            email,
            password
          })
          .then(r=>res(r))
          .catch(e=>rej(e))
      })
    }
    signup(email:string, password:string,username:string):Promise<any>{
      return new Promise((res,rej)=>{
          this.api.post("/signup",{
            email,
            password,
            username
          })
          .then(r=>res(r))
          .catch(e=>rej(e))
      })
    }
    
}

const api = new Api();

export default api;