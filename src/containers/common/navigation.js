import React from 'react';
import { Link } from "react-router-dom";
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
      <Link className="navbar-brand" to="/">
        <img src={StaffBookLogo} height="80" alt="" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              <img src={DashboardIcon} height="15px"/> Dashboard
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <img src={SearchProfileIcon} height="18px"/> Search Profile
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <img src={ShortlistedProfileIcon} height="18px"/> Shortlisted Profiles
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <img src={RecommendedProfileIcon} height="18px"/> Recommended Profiles
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <img src={CandidateStatusIcon} height="18px"/> Candidates Status
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <img src={NotificationIcon} height="18px"/>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              <img src={SettingsIcon} height="18px"/>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
