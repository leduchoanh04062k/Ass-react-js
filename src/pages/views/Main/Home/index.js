import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
const Home = ({ products }) => {
  return (
    <div>
      <div className="colorlib-intro">
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="images/1285481_orig.jpg" width="100%" height="800"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/giaynation-banner.jpg"
              width="100%"
              height="800"
            ></img>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/banner_cheap_nike_air_max.jpg"
              width="100%"
              height="800"
            ></img>
          </SwiperSlide>

          {/* <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </div>
      <div className="colorlib-intro">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="intro">
                It started with a simple idea: Create quality, well-designed
                products that I wanted myself.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a
                  href="#"
                  className="featured-img"
                  style={{
                    backgroundImage:
                      "url(images/top-nhung-thuong-hieu-giay-noi-tieng-the-gioi-1201x800.jpg)",
                  }}
                />
                <div className="desc">
                  <h2>
                    <a href="#">Shop Men's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-sm-6 text-center">
              <div className="featured">
                <a
                  href="#"
                  className="featured-img"
                  style={{
                    backgroundImage:
                      "url(images/reebok-v61152-kamikaze_ii_mid-1-e.jpg)",
                  }}
                />
                <div className="desc">
                  <h2>
                    <a href="#">Shop Women's Collection</a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="colorlib-product">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
              <h2>Best Sellers</h2>
            </div>
          </div>

          <div className="row row-pb-md">
            {products.map((products, index) => (
              <div className="col-lg-3 mb-4 text-center" key={index}>
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img
                      src={products.image}
                      className="img-fluid"
                      alt="Free html5 bootstrap 4 template"
                    />
                  </a>
                  <div className="desc">
                    <Link to={"/detail/" + products.id} className="cart-title">
                      {products.name}
                    </Link>

                    <span className="price">${products.price}</span>
                  </div>
                </div>
              </div>
            ))}
            ;
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                <a href="#" className="btn btn-primary btn-lg">
                  Shop All Products
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
