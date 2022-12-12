import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductServices from '../services/ProductServices'

const Layout = () => {

const [categories, setCategories] = useState([])
const [products, setProducts] = useState([])
 const navigate = useNavigate()


const getAllProduct = () => {
  ProductServices.getAllProduct().then(res => {
    console.log("product",res)
    setProducts(res.data.data)
  }).catch(err => {
    console.log(err)
  })
}

const getAll = () => {
  axios.get("http://localhost:4000/cat/GetAllCategories").then(res => {
    //console.log(res)
    setCategories(res.data.data)
  
  }).catch(err => {
    console.log(err)
  })

}

useEffect(() => {
  
getAll()
getAllProduct()
 
}, [])

 


  return (
    <div>

     {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid mb-5">
    <div className="row border-top px-xl-5">
      <div className="col-lg-3 d-none d-lg-block">
        <a className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: 65, marginTop: '-1px', padding: '0 30px'}}>
          <h6 className="m-0">Categories</h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
          <div className="navbar-nav w-100 overflow-hidden" style={{height: 410}}>
           {categories.map((item,index) => {
            return (
              <div className="nav-item dropdown">
              <a href="#" className="nav-link" data-toggle="dropdown">{item.name} <i className="fa fa-angle-down float-right mt-1" /></a>
              <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
               {
        item.subCategories.map((sub) => {
          return(
            <a href className="dropdown-item">{sub.name}</a>

          )
        })
               }               
              </div>
            </div>
            )
           })}
           
          </div>
        </nav>
      </div>
      <div className="col-lg-9">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
          <a href className="text-decoration-none d-block d-lg-none">
            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
          </a>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto py-0">
              <a href="index.html" className="nav-item nav-link active">Home</a>
              <a href="shop.html" className="nav-item nav-link">Shop</a>
              <a href="detail.html" className="nav-item nav-link">Shop Detail</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                <div className="dropdown-menu rounded-0 m-0">
                  <a href="cart.html" className="dropdown-item">Shopping Cart</a>
                  <a href="checkout.html" className="dropdown-item">Checkout</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <div className="navbar-nav ml-auto py-0">
              <a href className="nav-item nav-link">Login</a>
              <a href className="nav-item nav-link">Register</a>
            </div>
          </div>
        </nav>
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{height: 410}}>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                  <a href className="btn btn-light py-2 px-3">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{height: 410}}>
              <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                  <a href className="btn btn-light py-2 px-3">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-dark" style={{width: 45, height: 45}}>
              <span className="carousel-control-prev-icon mb-n2" />
            </div>
          </a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-dark" style={{width: 45, height: 45}}>
              <span className="carousel-control-next-icon mb-n2" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  {/* Navbar End */}
  {/* Featured Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center border mb-4" style={{padding: 30}}>
          <h1 className="fa fa-check text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center border mb-4" style={{padding: 30}}>
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center border mb-4" style={{padding: 30}}>
          <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center border mb-4" style={{padding: 30}}>
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Featured End */}
  {/* Categories Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="img/cat-1.jpg" alt />
          </a>
          <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="img/cat-2.jpg" alt />
          </a>
          <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="img/cat-3.jpg" alt />
          </a>
          <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="img/cat-4.jpg" alt />
          </a>
          <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="img/cat-5.jpg" alt />
          </a>
          <h5 className="font-weight-semi-bold m-0">Bags</h5>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 pb-1">
        <div className="cat-item d-flex flex-column border mb-4" style={{padding: 30}}>
          <p className="text-right">15 Products</p>
          <a href className="cat-img position-relative overflow-hidden mb-3">
            <img className="img-fluid" src="img/cat-6.jpg" alt />
          </a>
          <h5 className="font-weight-semi-bold m-0">Shoes</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Categories End */}
  {/* Offer Start */}
  <div className="container-fluid offer pt-5">
    <div className="row px-xl-5">
      <div className="col-md-6 pb-4">
        <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
          <img src="img/offer-1.png" alt />
          <div className="position-relative" style={{zIndex: 1}}>
            <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
            <h1 className="mb-4 font-weight-semi-bold">Spring Collection</h1>
            <a href className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-6 pb-4">
        <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
          <img src="img/offer-2.png" alt />
          <div className="position-relative" style={{zIndex: 1}}>
            <h5 className="text-uppercase text-primary mb-3">20% off the all order</h5>
            <h1 className="mb-4 font-weight-semi-bold">Winter Collection</h1>
            <a href className="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Offer End */}
  {/* Products Start */}
  <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5"><span className="px-2">Trandy Products</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
       
      {products.map((item,index) => {
        return (
          
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
 <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img style={{height:"300px"}} className="img-fluid w-100" src={"http://localhost:4000/getfile/"+ item.galleries[0]?.name} />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{item.ref}</h6>
            <div className="d-flex justify-content-center">
              <h6>{item.price}</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a onClick={() => navigate(`/productDetails/${item._id}`)} className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
          </div>
        )
      })   
      }
    </div>
  </div>
  {/* Products End */}
  {/* Subscribe Start */}
  <div className="container-fluid bg-secondary my-5">
    <div className="row justify-content-md-center py-5 px-xl-5">
      <div className="col-md-6 col-12 py-5">
        <div className="text-center mb-2 pb-2">
          <h2 className="section-title px-5 mb-3"><span className="bg-secondary px-2">Stay Updated</span></h2>
          <p>Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet diam labore at justo ipsum eirmod duo labore labore.</p>
        </div>
        <form action>
          <div className="input-group">
            <input type="text" className="form-control border-white p-4" placeholder="Email Goes Here" />
            <div className="input-group-append">
              <button className="btn btn-primary px-4">Subscribe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Subscribe End */}
  {/* Products Start */}
  <div className="container-fluid pt-5">
    <div className="text-center mb-4">
      <h2 className="section-title px-5"><span className="px-2">Just Arrived</span></h2>
    </div>
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img/product-1.jpg" alt />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img/product-2.jpg" alt />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img/product-3.jpg" alt />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img/product-4.jpg" alt />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img/product-5.jpg" alt />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img/product-6.jpg" alt />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img/product-7.jpg" alt />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <img className="img-fluid w-100" src="img/product-8.jpg" alt />
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
            <div className="d-flex justify-content-center">
              <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1" />View Detail</a>
            <a href className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1" />Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Products End */}
  {/* Vendor Start */}
  <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col">
        <div className="owl-carousel vendor-carousel">
          <div className="vendor-item border p-4">
            <img src="img/vendor-1.jpg" alt />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-2.jpg" alt />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-3.jpg" alt />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-4.jpg" alt />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-5.jpg" alt />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-6.jpg" alt />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-7.jpg" alt />
          </div>
          <div className="vendor-item border p-4">
            <img src="img/vendor-8.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>  
    </div>
  )
}

export default Layout