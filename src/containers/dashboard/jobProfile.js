import React from 'react';

import { ReactComponent as Trending } from '../../assets/icons/trending.svg';

const JobProfile = props => {
  const {
    title,
    applicants,
    shortlisted,
    rejected,
    onClick,
    trending=false,
  } = props;

  return (
    <div className="row job-profile p-2" onClick={onClick}>
      <div className="col-12 title">
        {title}
      </div>
      <div className="col-11 stats py-1">
        <div className="row">
          <div className="col-4 px-1 stat">
            {applicants} Applications
          </div>
          <div className="col-4 px-1 stat">
            {shortlisted} Shortlisted
          </div>
          <div className="col-4 px-1 stat no-border">
            {rejected} Rejected
          </div>
        </div>
      </div>
      <div className="col-1 p-0">
        {trending && <Trending className="graphup" />}
      </div>
    </div>
  );
};

export default JobProfile;
