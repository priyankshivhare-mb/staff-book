import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="row pb-4">
      <div className="col-12 px-5">
        <Link className="footer-link pr-3">Terms and Conditions</Link>
        <Link className="footer-link px-3">Privacy Policy</Link>
        <Link className="footer-link px-3">Help</Link>
        <Link className="footer-link px-3 no-border">Contact</Link>
        <Link className="footer-link pl-3 no-border float-right">© All Rights Reserved.</Link>
      </div>
    </div>
  );
};

export default Footer;
