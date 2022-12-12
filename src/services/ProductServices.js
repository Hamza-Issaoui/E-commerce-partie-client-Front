import http from "./Axios"


const getAllProduct = () => {
    return http.get('/product/GetAllProducts')
}
const getProduct = (id) => {
    return http .get(`/product/GetProductById/${id}`)
}



export default {
    
    getAllProduct,
    getProduct
    
   
}