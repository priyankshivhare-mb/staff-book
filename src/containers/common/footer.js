import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="row pb-4">
      <div className="col-12 px-5">
        <span className="footer-link pr-3">Terms and Conditions</span>
        <span className="footer-link px-3">Privacy Policy</span>
        <span className="footer-link px-3">Help</span>
        <span className="footer-link px-3 no-border">Contact</span>
        <span className="footer-link pl-3 no-border float-right">© All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
