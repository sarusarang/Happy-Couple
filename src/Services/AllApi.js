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
    
    return  CommonApi("POST",`${base_url}/chatbotview/`,data,header)

}


// Add Address
export const PostAddress = async(data,header)=>{
    
    return  CommonApi("POST",`${base_url}/user_address/`,data,header)

}

// Get Address
export const GetAddress = async(data)=>{

    const params = new URLSearchParams({ user: data });
    
    return  CommonApi("GET",`${base_url}/user_address/?${params.toString()}`,"","")

}



// Add Cart
export const AddCart = async(data,header)=>{

  
    return  CommonApi("GET",`${base_url}/user_address/`,data,header)

}