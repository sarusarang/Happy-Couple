import { CommonApi } from "./CommonApi";


const base_url = "https://happycouplesolution.com"


// Get All products
export const GetAllProducts = async()=>{

    return  CommonApi("GET",`${base_url}/products-virtual/`)


}


// User Register
export const Register = async(data,headers)=>{


    return  CommonApi("POST",`${base_url}/api/register/`,data,headers)

}


// User Login
export const Login = async(data,headers)=>{
     
    return  CommonApi("POST",`${base_url}/api/token/`,data,headers)

}