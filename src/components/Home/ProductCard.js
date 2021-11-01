import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from 'react-stars';

const ProductCard = ({ product }) => {
    const options = {
        edit: false,
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        // value: product.ratings, include when we connect to mongoDB database
        value: 2.7,
        isHalf: true,
    }
    return (
        <Link className="productCard" to={`/product/${product.id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>{product.name}</p>
            <div>
                {/* include the below line and remove the line after that, after connecting to the database */}
                {/* <ReactStars {...options} /> <span> ({product.numOfReviews} Reviews) </span> */}
                <ReactStars color2={'#ffd700'} {...options} /> <span> (69 Reviews) </span>
            </div>
            <span>{`₹${product.price}`}</span>
        </Link>
    )
}

export default ProductCard;
