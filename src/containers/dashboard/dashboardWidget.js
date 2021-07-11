import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const DashboardWidget = props => {
  const { title, toLink, badgeText, children } = props;

  return  (
    <div className="dashboard-widget">
      <div className="row header">
        <div className="col-8">
          <div className="d-inline-block title">
            {title}
          </div>
          <span className="widget-badge">
            {badgeText}
          </span>
        </div>
        <div className="col-4">
          <div className="to-link float-right">
            <Link to={toLink}>View All</Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
