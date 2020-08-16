import React, { useState, useEffect } from "react";
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
import Routers from "./routers";
import apiRequest from "./api/productApi";
import apiRequestCate from "./api/categoryApi";
function App() {
  const [products, setProducts] = useState([]);
  // const [status, setStatus] = useState(false);
  // const [color, setColor] = useState("green");
  // // const a = () => {
  // //   setProducts(true);
  // // };
  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log("Lỗi: ", error);
      }
    };
    getProducts();
  }, []);
  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter((product) => product.id !== data.id);
      const confirmDelete = window.confirm("Bạn có chắc chắn muốn xó không");
      console.log(newProducts);
      if (confirmDelete) setProducts(newProducts);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  };
  //Thêm Sản phẩm
  const onHanleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      // const newProduct = {
      //   id: products.length + 1,
      //   ...product,
      // };
      setProducts([...products, data]);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  };
  //Sửa Sản phẩm
  const onHandleUpdate = async (id, product) => {
    const { data } = await apiRequest.update(id, product);
    const newProducts = products.map(
      (product) => (product.id === data.id ? data : product) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    localStorage.setItem("products", JSON.stringify(newProducts));
    setProducts(newProducts);
  };

  //Danh mục sản phẩm
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await apiRequestCate.getAll();
        setCategories(data);
      } catch (error) {
        console.log("Lỗi: ", error);
      }
    };
    getCategories();
  }, []);
  // Xóa danh mục
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await apiRequestCate.removeCate(id);
      const newCategories = categories.filter(
        (category) => category.id !== data.id
      );
      const confirmDelete = window.confirm("Bạn có chắc chắn muốn xó không");
      console.log(newCategories);
      if (confirmDelete) setCategories(newCategories);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  };

  //Thêm Danh mục
  const onHandleAddCate = async (category) => {
    try {
      const { data } = await apiRequestCate.createCate(category);
      // const newProduct = {
      //   id: products.length + 1,
      //   ...product,
      // };
      setCategories([...categories, data]);
      // console.log(data);
    } catch (error) {
      console.log("Lỗi: ", error);
    }
  };
  //Sửa danh mục
  const onHandleUpdateCate = async (id, category) => {
    const { data } = await apiRequestCate.updateCate(id, category);
    const newCategories = categories.map(
      (category) => (category.id === data.id ? data : category) // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    );
    localStorage.setItem("categories", JSON.stringify(newCategories));
    setCategories(newCategories);
  };

  return (
    <div className="App">
      <Routers
        categories={categories}
        onRemoveCate={onHandleRemoveCate}
        onAddCate={onHandleAddCate}
        onUpdateCate={onHandleUpdateCate}
        products={products}
        onRemove={onHandleRemove}
        onAdd={onHanleAdd}
        onUpdate={onHandleUpdate}
      />
    </div>
  );
}
export default App;
