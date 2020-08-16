import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";

const EditProduct = ({ products, onUpdate, categories }) => {
  const { register, handleSubmit, errors } = useForm();
  let { id } = useParams();
  let history = useHistory();
  const product = products.find((product) => product.id == id);

  // const [currentProduct, setCurrentProduct] = useState(product);

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   onUpdate(currentProduct);
  //   history.push("/admin/products");
  // };
  // const onHandleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCurrentProduct({
  //     ...currentProduct,
  //     [name]: value,
  //   });
  // };
  const onHandleSubmit = (data) => {
    // console.log(data);
    // console.log(data.image[0]);
    let file = data.image[0];
    // // tạo reference chứa ảnh trên firesbase
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    // // đẩy ảnh lên đường dẫn trên
    storageRef.put(file).then(() => {
      storageRef.getDownloadURL().then((url) => {
        //     console.log(url);
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          id,
          ...data,
          image: url,
        };
        // console.log(newData);
        // data.preventDefault();
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onUpdate(product.id, newData);
      });
    });
    history.push("/admin/products");
  };
  const cateName = categories.map((categories) => {
    return <option value={categories.id}>{categories.name}</option>;
  });
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
        <div className="form-group">
          <label htmlFor="">Category Name</label>
          <select
            name="cateId"
            className="form-control"
            ref={register}
            className="form-control"
            defaultValue={product.cateId}
          >
            {cateName}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="productName">Tên danh mục</label>
          <input
            type="text"
            name="name"
            ref={register}
            defaultValue={product.name}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productPrice">Ảnh danh mục</label>
          <img src={product.image} height="100" width="120" />
          <div className="input-group">
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="inputGroupFile02"
                name="image"
                ref={register}
              />
              <label
                className="custom-file-label"
                htmlFor="inputGroupFile02"
                aria-describedby="imageHelp"
              >
                Choose image
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="productName">Giá sản phẩm</label>
          <input
            type="text"
            name="price"
            ref={register}
            defaultValue={product.price}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Chi tiết sản phẩm</label>
          <input
            type="text"
            name="detail"
            ref={register}
            defaultValue={product.detail}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Cập nhật</button>
      </form>
    </div>
  );
};

EditProduct.propTypes = {};

export default EditProduct;
