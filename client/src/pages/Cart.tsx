import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementQuantity, decrementQuantity, removeItem } from '../features/cartSlice';
import { useDispatch } from 'react-redux';

export const Cart = () => {
  const {cart, totalQuantity,totalPrice, warningMessage}= useSelector((state:any)=>state.allCart)
  const dispatch= useDispatch();
  return (
    <section className="h-100 h-custom" style={{backgroundColor: "#d2c9ff"}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-8">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                    <h6 className="mb-0 text-muted">Total Items: {totalQuantity}</h6>
                  </div>
                  {
                    cart.length === 0 && <div>The cart is empty</div>
                  }
                  {cart?.map((product:any)=>
                    
                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                    <div className="col-md-2 col-lg-2 col-xl-2">
                      <img
                        src={`http://localhost:5000/product/readProducts/${product.image}`}
                        className="img-fluid rounded-3" alt="Cotton T-shirt"/>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3">
                      <h6 className="text-muted">{product.productName}</h6>
                      <h6 className="text-black mb-0">{product.shortDescription}</h6>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                      <button className="btn btn-link px-2"
                        onClick={()=>{dispatch(decrementQuantity(product))}}>
                        <i className="fas fa-minus"></i>
                      </button>

                      
                       <div className="form-control form-control-sm">{product.itemQuantity}</div>
                      <button className="btn btn-link px-2"
                        onClick={()=>{
                          dispatch(incrementQuantity(product))
                        }}>
                        <i className="fas fa-plus" ></i>
                      </button>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                      <h6 className="mb-0">{product.price}$</h6>
                    </div>
                    <div className="col-md-1 col-lg-1 col-xl-1 text-end" onClick={()=>{
                      dispatch(removeItem(product))
                    }}>
                      <i className="fas fa-times"></i>
                    </div>
                  </div>

                     )}
                  <div className="pt-5">
                    <Link to='/' style={{color:'black'}}><h6 className="mb-0"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</h6></Link>
                  </div>
                </div>
                 {
                        warningMessage && <div style={{zIndex:2000, position:'absolute', backgroundColor:'red', top:'15px',right:'60px', opacity:'0.8', color:'black', borderRadius:'5px',width:'300px', textAlign:'center', height:'30px'}}>{warningMessage}</div>
                  }
              </div>
              <div className="col-lg-4 bg-grey">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                  
               
                 

                  

                  <h5 className="text-uppercase mb-3">Coupon Code:</h5>

                  <div className="mb-5">
                    <div className="form-outline">
                      <input type="text" id="form3Examplea2" className="form-control form-control-lg" style={{backgroundColor:'#FFECEC'}} />
                      <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                    </div>
                  </div>

                  

                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>{totalPrice}$</h5>
                  </div>

                  {
                    window.sessionStorage.getItem('isLoggedIn')==='true'?<button type="button" className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Checkout</button>
                    :
                    <button type="button" className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Register</button>
                  }
                  

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
