import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink" />
          </div>
          <div className="sidebar-brand-text mx-3">LÊ ĐỨC HOÀNH</div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/admin/products" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Products</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/admin/categories" className="nav-link">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Category</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
