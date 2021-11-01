import React, { Fragment, useEffect } from 'react';
import Carousel from "react-material-ui-carousel"
import "./ProductDetials.css"; 
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProductDetails } from '../../actions/productAction';
import ReactStars from 'react-stars';
import ReviewCard from "./ReviewCard.js";
import Loader from '../layout/Loader/Loader.js';
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const ProductDetails = ({match}) => {
    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, error} = useSelector(state=>state.productDetails)

    const product = {
        name: "Allen Solly Black Round Neck T-shirt for Women",
        images: [{url: "https://i.ibb.co/bmpT2t4/faith-yarn-hgt-Wvsq5e2c-unsplash.jpg"}, {url: "https://i.ibb.co/xsrDbrs/faith-yarn-Wr0-Tp-Kqf26s-unsplash.jpg"}],
        price: "3000",
        id: "tshirt",
        description: "This is a Black Round Neck Cotton T-Shirt for Women from Allen Solly",
    };

    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        // value: product.ratings, include when we connect to mongoDB database
        value: 2.7,
        isHalf: true,
    }

    useEffect(() => {
        if(error){
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getProductDetails(match.params.id))
    }, [dispatch, match.params.id, error, alert])

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={`${product.name} --- ECOMMERCE`} />
                <div className="ProductDetails">
                <div>
                  <Carousel>
                    {product.images &&
                      product.images.map((item, i) => (
                        <img
                          className="CarouselImage"
                          key={i}
                          src={item.url}
                          alt={`${i} Slide`}
                        />
                    ))}
                        </Carousel>
                    </div>
                    <div>
                        <div className="detailsBlock-1">
                            <h2>{product.name}</h2>
                            <p>Product # {product.id}</p>
                        </div>
                        <div className="detailsBlock-2">
                        <ReactStars color2={'#ffd700'} {...options} />
                            {/* <span>({product.numOfReviews} Reviews)</span> */}
                            <span>(4 Reviews)</span>
                        </div>
                        <div className="detailsBlock-3">
                            <h1>{`₹${product.price}`}</h1>
                            <div className="detailsBlock-3-1">
                                <div className="detailsBlock-3-1-1">
                                    <button>-</button>
                                    <input type="number" value="1"  />
                                    <button>+</button>
                                </div>{" "}
                                <button className="submitReview">Add To Cart</button>
                            </div>
                            <p>
                                Status: {" "}
                                <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                                    {product.Stock < 1 ? "Out Of stock" : "In stock" }
                                </b>
                            </p>
                        </div>
                        <div className="detailsBlock-4">
                            Description : <p>{product.description}</p>
                        </div>
                        <button className="submitReview">Submit Review</button>
                    </div>
                </div>
    
                <h3 className="reviewsHeading">REVIEWS</h3>
                {product.reviews && product.reviews[0] ? (
                 <div className="reviews">
                     {product.reviews &&
                     product.reviews.map((review) => <ReviewCard review={review} />)}
                 </div>
                ) : (
                    <p className="noReviews">No Reviews Yet</p>   
                )} 
    
            </Fragment>
            )}
        </Fragment>
    )
}

export default ProductDetails;
