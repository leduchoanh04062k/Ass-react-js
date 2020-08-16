import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Men = ({ products }) => {
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
                / <span>Men</span>
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
                  <a href="#">New Arrivals</a> <a href="#">Best Sellers</a>{" "}
                  <a href="#">Extended Widths</a> <a href="#">Sale</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-featured">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 text-center">
              <div className="featured">
                <div
                  className="featured-img featured-img-2"
                  style={{
                    backgroundImage:
                      "url(images/photo-2019-09-15-10-52-16.jpg)",
                  }}
                >
                  <h2>Casuals</h2>
                  <p>
                    <a href="#" className="btn btn-primary btn-lg">
                      Shop now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="featured">
                <div
                  className="featured-img featured-img-2"
                  style={{
                    backgroundImage: "url(images/item-11.jpg)",
                  }}
                >
                  <h2>Dress</h2>
                  <p>
                    <a href="#" className="btn btn-primary btn-lg">
                      Shop now
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-4 text-center">
              <div className="featured">
                <div
                  className="featured-img featured-img-2"
                  style={{
                    backgroundImage:
                      "url(images/T9bFDlk4zFsXsLgDf78q_simg_de2fe0_500x500_maxb.jpg)",
                  }}
                >
                  <h2>Sports</h2>
                  <p>
                    <a href="#" className="btn btn-primary btn-lg">
                      Shop now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
              <h2>View All Products</h2>
            </div>
          </div>
          <div className="row row-pb-md">
            {products.map((products, index) => (
              <div className="col-md-3 col-lg-3 mb-4 text-center" key={index}>
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img
                      src={products.image}
                      className="img-fluid"
                      alt="Free html5 bootstrap 4 template"
                    />
                  </a>
                  <div className="desc">
                    <h2>
                      <Link
                        to={"/detail/" + products.id}
                        className="cart-title"
                      >
                        {products.name}
                      </Link>
                    </h2>
                    <span className="price">{products.price}</span>
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

Men.propTypes = {};

export default Men;
