import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { addProudcts } from "../redux/action/products_action";

const ProductsComponent = () => {
  const products = useSelector((state) =>state.allProudcts.products)
  console.log(products);

  const dispatch =useDispatch();

  // useEffect(()=>{
  // products
  // },[0])

  return (
    <div className="row" style={{ marginTop: '10px' }}>
      <div className="col-md-12 mx-0 mb-4">
        <div className='row'>
          <h1>cartcount</h1>
        </div>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{ marginBottom: '18px' }}>
              <a href={`/product/${product.id}`}>
                <div className='custom-card overflow-hidden h-100 shadow'>
                  <img className="card-img-center img-fluid " src={product.image}
                    style={{ width: '100px', height: '100px', }} alt='' />
                  <h6 className="card-text text-center text-uppercase">{product.category}</h6>
                  <h5 className="card-title text-center">${product.price}</h5>
                  <div className='py-2 d-flex justify-content-center fs-6'>
                    <ReactStars
                      count={5}
                      value={product.rating.rate}
                      isHalf={true}
                      edit={false}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700">
                    </ReactStars>
                  </div>
                  <button className="btn btn-success"
                  onClick={()=>dispatch(addProudcts(product))}

                  >Add to Cart</button>
                </div>
              </a>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}
export default ProductsComponent;