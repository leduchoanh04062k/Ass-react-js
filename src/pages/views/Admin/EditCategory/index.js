import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";

const EditCategory = ({ categories, onUpdateCate }) => {
  const { register, handleSubmit, errors } = useForm();
  let { id } = useParams();
  let history = useHistory();
  const category = categories.find((category) => category.id == id);

  // const [currentCategory, setCurrentCategory] = useState(category);

  // const onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   onUpdateCate(currentCategory);
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
        onUpdateCate(category.id, newData);
      });
    });
    history.push("/admin/categories");
  };
  // const onHandleChange = (e) => {
  //   const { name, value } = e.target;
  //   setCurrentCategory({
  //     ...currentCategory,
  //     [name]: value,
  //   });
  // };
  return (
    // <div>{currentCategory.name}</div>
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)} className="w-50">
        <div className="form-group">
          <label htmlFor="productName">Tên danh mục</label>
          <input
            type="text"
            name="name"
            ref={register}
            defaultValue={category.name}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="productPrice">Ảnh danh mục</label>
          <img src={category.image} height="100" width="120" />
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
          <label htmlFor="productName">Description</label>
          <input
            type="text"
            name="description"
            defaultValue={category.description}
            ref={register}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Cập nhật</button>
      </form>
    </div>
  );
};

EditCategory.propTypes = {};

export default EditCategory;
