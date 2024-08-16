import { CommonApi } from "./CommonApi";


const base_url = "https://happycouplesolution.com"


// Get All products
export const GetAllProducts = async()=>{

    return  CommonApi("GET",`${base_url}/products/`)

}

// Product Quantity
export const ProductQuantity = async()=>{

    return  CommonApi("GET",`${base_url}/productquantity/`)

}



// User Register
export const Register = async(data,headers)=>{


    return  CommonApi("POST",`${base_url}/api/register/`,data,headers)

}


// User Login
export const Login = async(data,headers)=>{
     
    return  CommonApi("POST",`${base_url}/api/token/`,data,headers)

}


// Chat Bot
export const ChatBotApi = async(data,header)=>{
    
    return  CommonApi("POST",`${base_url}/chatbot`,data,header)

}


// Add Address
export const PostAddress = async(data,header)=>{
    
    return  CommonApi("POST",`${base_url}/user_address/`,data,header)

}