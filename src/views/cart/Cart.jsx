import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import { clearCart, removeFromCart, incrementQuantity, decrementQuantity } from '../../redux/CartRedux'

const Cart = () => {

const [quantity, setQuantity] = useState(1)

const navigate = useNavigate()

const dispatch = useDispatch()

const cart = useSelector(state => state.cart) 
//console.log("cartt",cart)



  return (

    

   <div>

        <TopBar/>
        <Header/>

  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      <div className="col-lg-8 table-responsive mb-5">
        <table className="table table-bordered text-center mb-0">
          <thead className="bg-secondary text-dark">
            <tr>
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
           
           
          {cart.products.map((item, index) => {
                return(
                    <tr>
                    <td className="align-middle"><img src={("http://localhost:4000/getfile/"+ item.product.galleries[0]?.name)} alt style={{width: 50}} /> {item.product.ref}</td>
                    <td className="align-middle">{item.product.price} dt</td>
                    <td className="align-middle">
                      <div className="input-group quantity mx-auto" style={{width: 100}}>
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-primary btn-minus" onClick={() => dispatch(decrementQuantity(item))}>
                            <i className="fa fa-minus" />
                          </button>
                        </div>
                        <input type="text" className="form-control form-control-sm bg-secondary text-center" value={item.quantity} />
                        <div className="input-group-btn">
                          <button className="btn btn-sm btn-primary btn-plus" onClick={() => dispatch(incrementQuantity(item))}>
                            <i className="fa fa-plus" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle">{item.price} dt</td>
                    <td className="align-middle"><button className="btn btn-sm btn-primary" onClick={() => dispatch(removeFromCart(item))} ><i className="fa fa-times" /></button></td>
                  </tr> 

                )
            }) }
           
          </tbody>
        </table>
        <div style={{display:"flex",  justifyContent:"flex-end", marginTop:"10px"}} className="input-group-append">   
          <button className="btn btn-primary" onClick={() => dispatch(clearCart())} >clear Cart</button>     
        </div>
      </div>
      <div className="col-lg-4">
        <form className="mb-5" action>
          <div className="input-group">
            <input type="text" className="form-control p-4" placeholder="Coupon Code" />
            <div className="input-group-append">
              <button className="btn btn-primary">Apply Coupon</button>
            </div>
          </div>
        </form>
        <div className="card border-secondary mb-5">
          <div className="card-header bg-secondary border-0">
            <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3 pt-1">
              <h6 className="font-weight-medium">Price Total</h6>
              <h6 className="font-weight-medium">{cart.priceTotal}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Quantity Total</h6>
              <h6 className="font-weight-medium">{cart.quantityTotal}</h6>
            </div>
          </div>
          <div className="card-footer border-secondary bg-transparent">
            <div className="d-flex justify-content-between mt-2">
              <h5 className="font-weight-bold">Total</h5>
              <h5 className="font-weight-bold">{cart.priceTotal} dt</h5>
            </div>
            <button className="btn btn-block btn-primary my-3 py-3" onClick={() => navigate("/order")}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>

</div>

  )
}

export default Cart