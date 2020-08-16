import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";
const Addproduct = ({ onAdd, categories }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  // const onSubmit = (data) => console.log(data);
  // const [valueInput, setValueInput] = useState({});
  // const onHandleChange = (dat) => {
  //   //   const { name, value } = e.target;
  //   //   setValueInput({
  //   //     ...valueInput,
  //   //     [name]: value,
  // };
  // setValue({
  //   name: e.target.value,
  // });

  const onHandleSubmit = (data) => {
    // console.log(data);
    console.log(data.image[0]);
    let file = data.image[0];
    // tạo reference chứa ảnh trên firesbase
    let storageRef = firebase.storage().ref(`images/${file.name}`);
    // đẩy ảnh lên đường dẫn trên
    storageRef.put(file).then(function () {
      storageRef.getDownloadURL().then((url) => {
        console.log(url);
        // Tạo object mới chứa toàn bộ thông tin từ input
        const newData = {
          id: Math.random().toString(36).substr(2, 9),
          ...data,
          image: url,
        };
        console.log(newData);
        // đẩy dữ liệu ra ngoài app.js thông qua props onAdd
        onAdd(newData);
      });
    });
    history.push("/admin/products");
  };

  // const Addproduct = (props) => {
  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Add Product</h6>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <div className="form-group">
            <label htmlFor="inputProductName">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="inputProductName"
              name="name"
              ref={register({ required: true, minLength: 10 })}
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-danger">Mời bạn nhập tên</span>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <span className="text-danger">Mời bạn nhập đủ 10 ký tự</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="cateId">Category Name</label>
            <select name="cateId" className="form-control" ref={register}>
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="categoryImage">Ảnh danh mục</label>
            <div className="input-group">
              <div className="custom-file">
                <input
                  type="file"
                  className="custom-file-input"
                  id="inputGroupFile02"
                  name="image"
                  ref={register}
                />
                {errors.image && (
                  <span className="text-danger">Mời bạn chọn ảnh</span>
                )}
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
            <label htmlFor="inputProductPrice">Price</label>
            <input
              type="text"
              className="form-control"
              id="inputProductPrice"
              name="price"
              ref={register({ required: true })}
            />
            {errors.price && (
              <span className="text-danger">Mời bạn nhập giá</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="inputProductDetail">Detail</label>
            <input
              type="text"
              className="form-control"
              id="inputProductDetail"
              name="detail"
              ref={register({ required: true, minLength: 20 })}
            />
            {errors.detail && errors.name.type === "required" && (
              <span className="text-danger">Mời bạn nhập chi tiết</span>
            )}
            {errors.detail && errors.detail.type === "minLength" && (
              <span className="text-danger">Mời bạn nhập đủ 20 ký tự</span>
            )}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

Addproduct.propTypes = {};

export default Addproduct;
