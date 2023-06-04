import React, { Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { deletedProducts, selectedProducts, addProudcts, incresaseProducts } from '../redux/action/products_action';
import axios from 'axios';
import { useParams } from 'react-router';

const AddtoCard = () => {
  const { productId } = useParams();
  const product = useSelector(state => state.allProudcts.products);
  const { id,title, price, category, image, description } = product
  console.log(product);
  const quantity =useSelector(state =>state.allProudcts.numberproducts)
  const dispatch = useDispatch();
  const products = products.find((product) => String(product.id) === productId);


  const fetchProuductsDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => console.log(err));
    dispatch(selectedProducts(response.data));
  }

  useEffect(() => {
    if (productId && productId !== "") fetchProuductsDetails(productId);
  }, [productId])

  // let ListCart = [];
  // let TotalCart=0;

  // Object.keys(product).forEach(function(products){
  //   TotalCart+=product[products].quantity * product[products].price;
  //   ListCart.push(product[products]);
  // });

  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>
        <div className="col-12">
          {/* <h5>Cart ({totalUniqueItems}) total Items:({totalItems})</h5> */}
          <table className='table table-light table-hover m-0'>
            <tbody>
              {Object.keys(product).length === 0 ? (
                <Fragment></Fragment>
              ) : (
                <tr key={product.id}>
                  <td>
                    <img src={product.image} style={{ height: '6rem' }}></img>
                  </td>
                  <td>{product.title}</td>
                  <td>${product.price} </td>
                  <td>Quantity ({product.category}) </td>
                  <td>
                    <button className='btn btn-info ms-2'>-</button>
                       <span className="btn btn-info ms-2">{quantity}</span>
                    <button className='btn btn-info ms-2'
                      onClick={() => { dispatch(incresaseProducts(product)) }} >+</button>
                   
                    <button className='btn btn-danger ms-2'
                     onClick={() => { dispatch(deletedProducts(product)) }}>Remove</button>

                  </td>

                </tr>
              )}
            </tbody>

          </table>

        </div>
        <div className='col-auto ms-auto'>
          {/* <h2>Total Price: $cartTotal</h2>
        </div>
        <div className='col-auto'>
          <button className='btn btn-danger m-2'
            >Clear</button>
          <button className='btn btn-primary ms-2' >Buy Now</button> */}
        </div>

      </div>
    </section>
  )
}
export default AddtoCard