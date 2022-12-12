import http from "./Axios"


const login = (data) => {
    return http .post('/login', data)
}



export default {
    
    login,
    
   
}