import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import apiRequest from "./../../../../api/productApi";
const Women = ({ products, categories }) => {
  const { id } = useParams();
  const listProduct = products.filter((product) => product.cateId == id);
  const [listProducts, setlistProducts] = useState([]);
  useEffect(() => {
    const getCate = async () => {
      try {
        const response = await apiRequest.getProductAll();
        setlistProducts(response.data);
      } catch (error) {}
    };
    getCate();
  }, []);

  return (
    <div>
      <div className="breadcrumbs">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="bread">
                <span>
                  <a href="index.html">Home</a>
                </span>{" "}
                / <span>Women</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumbs-two">
        <div className="container">
          <div className="row">
            <div className="col">
              <div
                className="breadcrumbs-img"
                style={{ backgroundImage: "url(images/2.png)" }}
              ></div>
              <div className="menu text-center">
                <p>
                  {categories.map(({ id, name }, index) => (
                    // <a href="#">{categories.name}</a>
                    <Link to={"women/" + id} className="cart-title" key={index}>
                      {name}
                    </Link>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="colorlib-featured">
        <div className="container">
          <div className="row">
            {categories.map((categories, index) => (
              <div className="col-sm-3 text-center">
                <div className="featured">
                  <div className="featured-img featured-img-2">
                    <img src={categories.im}></img>
                    <h2>{categories.name}</h2>
                    <p>
                      <a href="#" className="btn btn-primary btn-lg">
                        Shop now
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>View All Products</h2>
            </div>
          </div>
          <div className="row row-pb-md">
            {listProduct.map(({ id, name, image, price }, index) => (
              <div className="col-md-3 col-lg-3 mb-4 text-center" key={index}>
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img
                      src={image}
                      className="img-fluid"
                      alt="Free html5 bootstrap 4 template"
                    />
                  </a>
                  <div className="desc">
                    <h2>
                      <Link to={"/detail/" + id} className="cart-title">
                        {name}
                      </Link>
                    </h2>
                    <span className="price">{price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="block-27">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ion-ios-arrow-back" />
                    </a>
                  </li>
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ion-ios-arrow-forward" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Women.propTypes = {};

export default Women;
