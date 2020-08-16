import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
const AddDetail = ({ products, onRemove }) => {
  const { id } = useParams();
  const product = products.find((products) => products.id == id);
  console.log(products);
  const onHandleRemove = (id) => {
    onRemove(id);
  };

  return (
    <div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
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
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{id}</td>
                  <td>{product.name}</td>
                  <td>
                    <img src={product.image} width="100"></img>
                  </td>
                  <td>{product.detail}</td>
                  <td>{product.price}</td>

                  <td>
                    {/* <button
                      className="btn btn-danger ml-3"
                      onClick={() => onHandleRemove(id)}
                    >
                      Xóa
                    </button> */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
AddDetail.propTypes = {};

export default AddDetail;
