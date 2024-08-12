import { CommonApi } from "./CommonApi";


const base_url = "https://happycouplesolution.com"


// Get All products
export const GetAllProducts = async()=>{

    return  CommonApi("GET",`${base_url}/products-virtual/`)


}