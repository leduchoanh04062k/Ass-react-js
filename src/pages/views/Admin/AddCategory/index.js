import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import firebase from "../../../../firebase";
const AddCategory = ({ onAddCate }) => {
  const { register, handleSubmit, watch, errors } = useForm();
  let history = useHistory();
  const onHandleSubmitCate = (data) => {
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
        onAddCate(newData);
      });
    });
    history.push("/admin/categories");
  };

  return (
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Add Category</h6>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(onHandleSubmitCate)}>
          <div className="form-group">
            <label htmlFor="inputCateName">Category Name</label>
            <input
              type="text"
              className="form-control"
              id="inputCateName"
              name="name"
              ref={register({ required: true, minLength: 5 })}
            />
            {errors.name && errors.name.type == "required" && (
              <span className="text-danger">Mời bạn nhập tên</span>
            )}
            {errors.name && errors.name.type == "minLength" && (
              <span className="text-danger">Mời bạn nhập đủ 5 ký tự</span>
            )}
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
            <label htmlFor="inputCateDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="inputCateDescription"
              name="description"
              ref={register({ required: true, minLength: 10 })}
            />
            {errors.description && (
              <span className="text-danger">Mời bạn nhập chi tiết</span>
            )}
            {errors.description && errors.description.type === "minLength" && (
              <span className="text-danger">Mời bạn nhập đủ 10 ký tự</span>
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

AddCategory.propTypes = {};

export default AddCategory;
