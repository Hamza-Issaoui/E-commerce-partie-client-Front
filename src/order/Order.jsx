import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import { clearCart } from '../redux/CartRedux'
import Alert from 'react-bootstrap/Alert';


const Order = () => {


  const [show, setShow] = useState(false);
  
  const [message, setMessage] = useState('');


  


    const dispatch = useDispatch()

const cart = useSelector(state => state.cart)  //importer state from store
const user = useSelector(state => state.user)
//console.log("user",user._id)
const [data, setData] = useState({})

const newData = {
    customer: user.currentUser ? user.currentUser.user._id : "",
    priceTotal: cart.priceTotal,
    qtyTotal: cart.quantityTotal,
    products: cart.products.map(item => ({
        product: item.product._id,
        qte: item.quantity,
        price: item.price,
        color: item.color,
        size: item.size,
    }))
}
console.log("newData",newData)
const handelClick = () => {
    axios.post("http://localhost:4000/order/createOrder", newData).then(res => {
        console.log(res)
        setData(res.data.data)
        setMessage(res.data.msg)
              setShow(true)
              setTimeout(() => {
                setShow(false)
              }, 5000);
    }).catch(err => {
        console.log(err)
    })
    
}


  return (
    <div>
        <TopBar/>
        <Header/>
        
        <div className="container-fluid bg-secondary mb-5">
  <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 300}}>
    <h1 className="font-weight-semi-bold text-uppercase mb-3">Checkout</h1>
    <div className="d-inline-flex">
      <p className="m-0"><a href>Home</a></p>
      <p className="m-0 px-2">-</p>
      <p className="m-0">Checkout</p>
    </div>
  </div>
</div>
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">

    <Alert variant="success" show = {show}>
      <p style={{display:"flex", justifyContent:"center"}}>
       {message}
      </p>      
    </Alert>

      <div style={{marginLeft:"400px"}}  className="col-lg-4">
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Order Total</h4>
          </div>
          <div className="card-body">
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", }} >
            <h5 className="font-weight-medium mb-3">Products</h5>
            <h5 className="font-weight-medium mb-3">Quantity</h5>
            <h5 className="font-weight-medium mb-3">Price</h5>
            </div>
            {cart.products.map((item, index) => {
                return(
<div>
    {
        item.quantity !== 0 ? 
        <div className="d-flex justify-content-between">
                    <p>{item.product.ref}</p>
                    <p>{item.quantity}</p>
                    <p>{item.price}</p>
                    </div>  
                    : ""
    }
</div>

                     
                )
            })}
                  <div className="d-flex justify-content-between">
                  <p></p>
                  <p></p>
                  <p></p>
                  </div>
            <hr className="mt-0" />
            <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Total Price</h6>
              <h6 className="font-weight-medium"  >{cart.priceTotal}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">10DT</h6>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <div className="d-flex justify-content-between mt-2">
              <h5 className="font-weight-bold">Total</h5>
              <h5 className="font-weight-bold">{cart.priceTotal + 10} DT</h5>
            </div>
          </div>
        </div>
        <div className="card border-secondary mb-5">
          <div className="card-footer border-secondary bg-transparent">
            <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" onClick= {handelClick} >Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </div>
  )
}

export default Order