import React from 'react';

import Sidebar from './sidebar';

import './styles.scss';

class StaffListing extends React.Component {
  render() {
    return (
      <div className="container-fluid search-profiles">
        <div className="row header">
          <div className="col-12">
            <div className="staff-on-call-wrapper p-0">
              <div className="row staff-head-wrapper">
                <div className="col-md-4 p-0">
                  <h1 className="heading-1">Book Staff On Call</h1>
                  <p className="staff-breadcrumb">Dashboard / Staff on Call / Book Staff-on call</p>
                </div>
                <div className="col-md-8">
                  <input placeholder="Search" className="float-right vertical-center"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
};

export default StaffListing;
