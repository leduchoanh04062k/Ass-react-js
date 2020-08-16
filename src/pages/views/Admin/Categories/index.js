import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Categories = ({ categories, onRemoveCate }) => {
  console.log(categories);
  const onHandleRemoveCate = (id) => {
    onRemoveCate(id);
  };
  return (
    <div>
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Quản lý danh mục</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <Link to="/admin/addcategory" className=" btn btn-primary">
              Thêm danh mục
            </Link>

            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing={0}
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map(({ id, name, image, description }, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{name}</td>
                    <td>
                      <img src={image} width="200" />
                    </td>
                    <td width="40%">{description}</td>

                    <td>
                      <Link
                        to={`/admin/editcategory/${id}`}
                        className="nav-link"
                        className="btn btn-primary"
                      >
                        Sửa
                      </Link>
                      <button
                        className="btn btn-danger ml-3"
                        onClick={() => onHandleRemoveCate(id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {};

export default Categories;
