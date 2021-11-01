import React, { Fragment, useEffect } from 'react';
import { CgMouse } from 'react-icons/all';
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from '../layout/MetaData';
import { clearErrors, getProduct } from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader.js";
import { useAlert } from 'react-alert';

// remove this code para below when we can execute the products from the backend
const product = {
    name: "Allen Solly Black Round Neck T-shirt for Women",
    images: [{url: "https://i.ibb.co/bmpT2t4/faith-yarn-hgt-Wvsq5e2c-unsplash.jpg"}],
    price: "3000",
    id: "tshirt",
};

const Home = () => {
    const alert=useAlert();
    const dispatch = useDispatch();
    const {loading,error,products,} = useSelector(state=>state.products)

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
    return (
        <Fragment>
            {loading ? (<Loader />) :(
                <Fragment>

                <MetaData title="Ecommerce" />
    
                <div className="banner">
                    <p>Welcome to Ecommerce</p>
                    <h4>Find Amazing Products Below</h4>
    
                    <a href="#container">
                        <button>
                            Scroll <CgMouse />
                        </button>
                    </a>
                </div>
    
                <h2 className="homeHeading">Featured Products</h2>
    
                <div className="container" id="container">
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    <ProductCard product={product} />
                    
                    {/* this code will be required when products are assigned from the backend */}
                    {/* {products && products.map(product => (
                        <Product product = {product} />
                    ))} */}
    
                </div>
            </Fragment>
            )}
        </Fragment>
    )
}

export default Home;
