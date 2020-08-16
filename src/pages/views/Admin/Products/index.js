import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// product: { name, price, status }
const ProductsManager = ({ products, onRemove, categories }) => {
  console.log(products);
  //   console.log(props.product.name);
  // const name =props.product.name;
  // const status =props.product.status;
  // const{name,price,status}=props.product;
  //khai báo 1 biến là 1 mảng chứa nhiều object
  //Truyền dữ liệu xuống component Product thông qua props
  //dựa vào props, sử dụng .map để hiểu thị dữ liệu
  const onHandleRemove = (id) => {
    onRemove(id);
  };

  return (
    <div>
      {/* Page Heading */}
      <h1 className="h3 mb-2 text-gray-800">Quản lý sản phẩm</h1>
      {/* DataTales Example */}
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <Link to="/admin/add" className=" btn btn-primary">
              Thêm sản phẩm
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
                  <th width="50%">Name</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(({ id, name, cateId, image, price }, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{name}</td>
                    <td>
                      {categories.map((category) =>
                        category.id === cateId ? category.name : ""
                      )}
                    </td>
                    <td>
                      <img src={image} width="100"></img>
                    </td>
                    <td>{price}</td>

                    <td>
                      <Link
                        to={`/admin/edit/${id}`}
                        className="nav-link"
                        className="btn btn-danger"
                      >
                        Sửa
                      </Link>
                      <Link
                        to={"/admin/AddDetail/" + id}
                        className="nav-link"
                        className="btn btn-primary"
                      >
                        Detail
                      </Link>
                      <button
                        className="btn btn-danger ml-3"
                        onClick={() => onHandleRemove(id)}
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

ProductsManager.propTypes = {};

export default ProductsManager;
