import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader.js";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { useAlert } from "react-alert";
import MetaData from "../layout/MetaData";

const categories = [
  "Laptop",
  "Footwear",
  "Bottomwear",
  "Topwear",
  "Attire",
  "Camera",
  "SmartPhones",
]

const Products = ({match}) => {

  const alert = useAlert();

  const products = {
    name: "Allen Solly Black Round Neck T-shirt for Women",
    images: [
      { url: "https://i.ibb.co/bmpT2t4/faith-yarn-hgt-Wvsq5e2c-unsplash.jpg" },
    ],
    price: "3000",
    id: "tshirt",
  };

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState(""); 
  const [ratings, setRatings] = useState(0)  

  const { loading, error, productsCount, resultPerPage, filterProductsCount } = useSelector(
    (state) => state.products
  );

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  }

  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  let count = filterProductsCount;

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS --- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">
            {/* {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}
              <div className="container" id="container">
                    <ProductCard product={products} />
                    <ProductCard product={products} />
                    <ProductCard product={products} />
                    <ProductCard product={products} />
                    <ProductCard product={products} />
                    <ProductCard product={products} />
                    <ProductCard product={products} />
                    <ProductCard product={products} />
                    
                    {/* this code will be required when products are assigned from the backend */}
                    {/* {products && products.map(product => (
                        <Product product = {product} />
                    ))} */}
    
                </div>
          </div>

          {keyword &&
                    <div className="filterBox">
                    <Typography>Price</Typography>
                    <Slider
                      value={price}
                      onChange={priceHandler}
                      valueLabelDisplay="auto"
                      aria-labelledby="range-slider"
                      min={0}
                      max={25000}
                    />
        
                    <Typography>Categories</Typography>
                    <ul className="categoryBox">
                      {categories.map((category) => (
                        <li
                        className="category-link"
                        key={category}
                        onClick={() => setCategory(category)}
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
        
                    <fieldset>
                      <Typography component="legend">Ratings</Typography>
                      <Slider 
                        value={ratings}
                        valueLabelDisplay="auto"
                        onChange={(e, newRating) => {
                          setRatings(newRating);
                        }}
                        aria-labelledby="continuous-slider"
                        min={0}
                        max={5}
                      />
                    </fieldset>
        
                  </div>}

          {resultPerPage < count && (
            <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="First"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
          )}

        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
