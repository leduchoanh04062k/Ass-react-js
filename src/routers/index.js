import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutMain from "../pages/layouts/LayoutMain";
import LayoutAdmin from "../pages/layouts/LayoutAdmin";
//Admin
import Dashboard from "../pages/views/Admin/Dashboard";
import ProductsManager from "../pages/views/Admin/Products";
//Views
import About from "../pages/views/Main/About";
import Men from "../pages/views/Main/Men";
import Home from "../pages/views/Main/Home";
import Addproduct from "../pages/views/Admin/Addproduct";
import Detail from "../pages/views/Main/Detail";
import AddDetail from "../pages/views/Admin/AddDetail";
import Contact from "../pages/views/Main/Contact";
import Cart from "../pages/views/Main/Cart";
import EditProduct from "../pages/views/Admin/EditProduct";
import Categories from "../pages/views/Admin/Categories";
import AddCategory from "../pages/views/Admin/AddCategory";
import EditCategory from "../pages/views/Admin/EditCategory";
import Women from "../pages/views/Main/Women";
const Routers = ({
  products,
  onRemove,
  onAdd,
  onUpdate,
  categories,
  onRemoveCate,
  onAddCate,
  onUpdateCate,
}) => {
  const onHandleRemove = (id) => {
    onRemove(id);
  };
  const onHandleAdd = (product) => {
    onAdd(product);
    //   const newArray = {
    //     id: products.length + 1,
    //     ...product,
    //   };
    //   setProducts([...products, newArray]);
  };
  const onHandleUpdate = (id, product) => {
    onUpdate(id, product);
  };
  //danh muc
  const onHandleRemoveCate = (id) => {
    onRemoveCate(id);
  };
  const onHandleAddCate = (category) => {
    onAddCate(category);
  };
  const onHandleUpdateCate = (id, category) => {
    onUpdateCate(id, category);
  };
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?/:path?" exact>
          <LayoutAdmin>
            <Switch>
              <Route path="/admin" exact>
                <Dashboard />
              </Route>
              <Route path="/admin/products">
                <ProductsManager
                  products={products}
                  categories={categories}
                  onRemove={onHandleRemove}
                />
              </Route>
              <Route path="/admin/add">
                <Addproduct
                  products={products}
                  categories={categories}
                  onAdd={onHandleAdd}
                />
              </Route>
              <Route path="/admin/AddDetail/:id">
                <AddDetail products={products} />
              </Route>
              <Route path="/admin/edit/:id">
                <EditProduct
                  products={products}
                  categories={categories}
                  onUpdate={onHandleUpdate}
                />
              </Route>
            </Switch>

            <Route path="/admin/categories">
              <Categories
                categories={categories}
                onRemoveCate={onHandleRemoveCate}
              />
            </Route>
            <Route path="/admin/addcategory">
              <AddCategory
                categories={categories}
                onAddCate={onHandleAddCate}
              />
            </Route>
            <Route path="/admin/editcategory/:id">
              <EditCategory
                categories={categories}
                onUpdateCate={onHandleUpdateCate}
              />
            </Route>
          </LayoutAdmin>
        </Route>
        <Route>
          <LayoutMain>
            <Switch>
              <Route path="/" exact>
                <Home products={products} />
              </Route>
              <Route path="/detail/:id">
                <Detail products={products} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/men">
                <Men products={products} />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              {/* <Route path="/women">
                <Women products={products} categories={categories} />
              </Route> */}
              <Route path="/women">
                <Women products={products} categories={categories} />
              </Route>
            </Switch>
          </LayoutMain>
        </Route>
      </Switch>
    </Router>
  );
};

Routers.propTypes = {};

export default Routers;
