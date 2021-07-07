import React from 'react';
import { NavLink } from "react-router-dom";
import StaffBookLogo from '../../assets/staff-book-logo.png';
import CandidateStatusIcon from '../../assets/icons/candidate-status.png';
import DashboardIcon from '../../assets/icons/dashboard.png';
import NotificationIcon from '../../assets/icons/notification.png';
import RecommendedProfileIcon from '../../assets/icons/recommended-profile.png';
import SearchProfileIcon from '../../assets/icons/search-profile.png';
import SettingsIcon from '../../assets/icons/settings.png';
import ShortlistedProfileIcon from '../../assets/icons/shortlisted-profile.png';

const Navigation = (props) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <NavLink className="navbar-brand" to="/">
        <img src={StaffBookLogo} height="80" alt="" />
      </NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" activeClassName="active">
              <img src={DashboardIcon} height="15px"/> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search-profiles" activeClassName="active">
              <img src={SearchProfileIcon} height="18px"/> Search Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/shortlisted-profiles" activeClassName="active">
              <img src={ShortlistedProfileIcon} height="18px"/> Shortlisted Profiles
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/recommended-profiles" activeClassName="active">
              <img src={RecommendedProfileIcon} height="18px"/> Recommended Profiles
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/candidate-status" activeClassName="active">
              <img src={CandidateStatusIcon} height="18px"/> Candidates Status
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/notifications" activeClassName="active">
              <img src={NotificationIcon} height="18px"/>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/settings" activeClassName="active">
              <img src={SettingsIcon} height="18px"/>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
