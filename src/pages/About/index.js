import React from "react";
import PropTypes from "prop-types";

const About = (props) => {
  return (
    <div>
      <div id="page">
        <nav className="colorlib-nav" role="navigation">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-sm-7 col-md-9">
                  <div id="colorlib-logo">
                    <a href="index.html">Footwear</a>
                  </div>
                </div>
                <div className="col-sm-5 col-md-3">
                  <form action="#" className="search-wrap">
                    <div className="form-group">
                      <input
                        type="search"
                        className="form-control search"
                        placeholder="Search"
                      />
                      <button
                        className="btn btn-primary submit-search text-center"
                        type="submit"
                      >
                        <i className="icon-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 text-left menu-1">
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="has-dropdown">
                      <a href="men.html">Men</a>
                      <ul className="dropdown">
                        <li>
                          <a href="product-detail.html">Product Detail</a>
                        </li>
                        <li>
                          <a href="cart.html">Shopping Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="order-complete.html">Order Complete</a>
                        </li>
                        <li>
                          <a href="add-to-wishlist.html">Wishlist</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="women.html">Women</a>
                    </li>
                    <li className="active">
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li className="cart">
                      <a href="cart.html">
                        <i className="icon-shopping-cart" /> Cart [0]
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="sale">
            <div className="container">
              <div className="row">
                <div className="col-sm-8 offset-sm-2 text-center">
                  <div className="row">
                    <div className="owl-carousel2">
                      <div className="item">
                        <div className="col">
                          <h3>
                            <a href="#">
                              25% off (Almost) Everything! Use Code: Summer Sale
                            </a>
                          </h3>
                        </div>
                      </div>
                      <div className="item">
                        <div className="col">
                          <h3>
                            <a href="#">
                              Our biggest sale yet 50% off all summer shoes
                            </a>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread">
                  <span>
                    <a href="index.html">Home</a>
                  </span>{" "}
                  / <span>About</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="colorlib-about">
          <div className="container">
            <div className="row row-pb-lg">
              <div className="col-sm-6 mb-3">
                <div
                  className="video colorlib-video"
                  style={{ backgroundImage: "url(images/about.jpg)" }}
                >
                  <a
                    href="https://vimeo.com/channels/staffpicks/93951774"
                    className="popup-vimeo"
                  >
                    <i className="icon-play3" />
                  </a>
                  <div className="overlay" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-wrap">
                  <h2>Footwear the leading eCommerce Store around the Globe</h2>
                  <p>
                    The Big Oxmox advised her not to do so, because there were
                    thousands of bad Commas, wild Question Marks and devious
                    Semikoli, but the Little Blind Text didn’t listen. She
                    packed her seven versalia, put her initial into the belt and
                    made herself on the way.
                  </p>
                  <p>
                    When she reached the first hills of the Italic Mountains,
                    she had a last view back on the skyline of her hometown
                    Bookmarksgrove, the headline of Alphabet Village and the
                    subline of her own road, the Line Lane. Pityful a rethoric
                    question ran over her cheek, then she continued her way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="colorlib-footer" role="contentinfo">
          <div className="container">
            <div className="row row-pb-md">
              <div className="col footer-col colorlib-widget">
                <h4>About Footwear</h4>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life
                </p>
                <p></p>
                <ul className="colorlib-social-icons">
                  <li>
                    <a href="#">
                      <i className="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-dribbble" />
                    </a>
                  </li>
                </ul>
                <p />
              </div>
              <div className="col footer-col colorlib-widget">
                <h4>Customer Care</h4>
                <p></p>
                <ul className="colorlib-footer-links">
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Returns/Exchange</a>
                  </li>
                  <li>
                    <a href="#">Gift Voucher</a>
                  </li>
                  <li>
                    <a href="#">Wishlist</a>
                  </li>
                  <li>
                    <a href="#">Special</a>
                  </li>
                  <li>
                    <a href="#">Customer Services</a>
                  </li>
                  <li>
                    <a href="#">Site maps</a>
                  </li>
                </ul>
                <p />
              </div>
              <div className="col footer-col colorlib-widget">
                <h4>Information</h4>
                <p></p>
                <ul className="colorlib-footer-links">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Delivery Information</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Order Tracking</a>
                  </li>
                </ul>
                <p />
              </div>
              <div className="col footer-col">
                <h4>News</h4>
                <ul className="colorlib-footer-links">
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="#">Press</a>
                  </li>
                  <li>
                    <a href="#">Exhibitions</a>
                  </li>
                </ul>
              </div>
              <div className="col footer-col">
                <h4>Contact Information</h4>
                <ul className="colorlib-footer-links">
                  <li>
                    291 South 21th Street, <br /> Suite 721 New York NY 10016
                  </li>
                  <li>
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </li>
                  <li>
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </li>
                  <li>
                    <a href="#">yoursite.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy">
            <div className="row">
              <div className="col-sm-12 text-center">
                <p>
                  <span>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="icon-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </span>
                  <span className="block">
                    Demo Images:{" "}
                    <a href="http://unsplash.co/" target="_blank">
                      Unsplash
                    </a>{" "}
                    ,{" "}
                    <a href="http://pexels.com/" target="_blank">
                      Pexels.com
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="gototop js-top">
        <a href="#" className="js-gotop">
          <i className="ion-ios-arrow-up" />
        </a>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
