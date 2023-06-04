import React, { useEffect } from "react";
import ProductsComponent from "./ProuductsComponent";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addProudcts } from "../redux/action/products_action";

const ProductsListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch()

    const fetchProuducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
            .catch(err => console.log(err))
        dispatch(addProudcts(response.data));
        console.log(response)
    }
    useEffect(() => {
        fetchProuducts(products);
    },[products])
    console.log("Products:", products);

    return (
        <div className="ui grid container">
            <ProductsComponent />
        </div>
    )
}
export default ProductsListing;

