import React from 'react';
import { ReactComponent as ThreeUsers } from '../../assets/icons/users-three.svg';

const DashboardSmallWidget = props => {
  const {
    title="20M",
    copy="Active Staff Profiles",
    icon:Icon=ThreeUsers
  } = props;

  return (
    <div className="col">
      <div className="dashboard-small-widget box-shadow">
        <div className="row px-4 py-3">
          <div className="col-9">
            <div className="title">
              {title}
            </div>
          </div>
          <div className="col-3">
            <Icon className="float-right"/>
          </div>
          <div className="col-12">
            <div className="copy">
              {copy}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSmallWidget;
