import React, { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addProudcts, selectedProducts } from "../redux/action/products_action";
import { useParams } from 'react-router-dom';
// import reducers from "../redux/reducers";
// import { productsReducer } from "../redux/reducers/products_reducer";

const ProductsDetails = () => {
    const { id } = useParams();
    let product = useSelector(state => state.selectProduct);
    const { title, price, category, image, description } = product
    const dispatch = useDispatch();
    console.log(product);
    // console.log(id);

    const fetchProuductsDetails = async () => {
        const response = await axios
            .get(`https://fakestoreapi.com/products/${id}`)
            .catch(err => console.log(err));
        dispatch(selectedProducts(response.data));
    }

    useEffect(() => {
        if (id && id !== "") fetchProuductsDetails(id);
    }, [id])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                // <div>Loading...</div>
                <div className="ui active centered inline loader"></div>
            ) : (
                <div className="card mb-6">
                    <div className="ui two column stackable center aligned grid">
                        {/* <div className="ui vertical divider">AND</div> */}
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="img-fluid rounded-start" src={image} />
                            </div>
                            <div className="col-md-8">
                                <h1>{title}</h1>
                                <h2>
                                    <a className="ui teal tag label">${price}</a>
                                </h2>
                                <h3 className="ui brown block header text-uppercase">{category}</h3>
                                <p>{description}</p>
                                <div className="ui vertical animated button" tabIndex="0">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <button className="btn btn-warning me-3"
                                    onClick={()=>dispatch(addProudcts(product))}>Add Card</button>

                                    {/* <button className="btn btn-success">Buy Now</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}

        </div>
    );
};

export default ProductsDetails;