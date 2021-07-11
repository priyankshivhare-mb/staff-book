import React from 'react';
import { NavLink, Link } from "react-router-dom";
import StaffBookLogo from '../../assets/staff-book-logo.png';
import staffProfiles from '../../fixtures/staffProfiles.json';

const currentUser = staffProfiles[0];

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand" to="/">
        <img src={StaffBookLogo} height="65" alt="" />
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search-profiles" activeClassName="active">
              Search Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shortlisted-profiles" activeClassName="active">
              Jobs Posted
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/recommended-profiles" activeClassName="active">
              Staff-On-Call
            </NavLink>
          </li>
          <li className="nav-item">
            <Link href="#" className="navbar-icon">
              <i className="fa fa-search" />
            </Link>
          </li>
          <span className="navbar-divider"/>
          <li className="nav-item">
            <Link href="#" className="navbar-icon">
              <i className="fa fa-bell-o" />
            </Link>
          </li>
          <span className="navbar-divider"/>
          <li className="nav-item">
            <Link href="#" className="nav-link">
              <span className="current-user-name">{currentUser.name}</span>
              <img className="rounded-circle" src={currentUser.img_url} height="35px"/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
