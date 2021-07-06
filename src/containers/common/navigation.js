import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StaffBookLogo from '../../assets/staff-book-logo.png';

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img src={StaffBookLogo} height="80" alt="" />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#"><i className="fa fa-th-large" /> Dashboard</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa fa-file-text-o" /> Search Profile
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa fa-file-text-o" /> Shortlisted Profiles
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa fa-file-text-o" /> Recommended Profiles
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa fa-file-text-o" /> Candidates Status
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa fa-bell-o" />
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              <i className="fa fa-cog" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
