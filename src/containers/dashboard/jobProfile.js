import React from 'react';

import { ReactComponent as Trending } from '../../assets/icons/trending.svg';

const JobProfile = props => {
  const {
    title,
    applicants,
    shortlisted,
    screening,
    onClick,
    trending=false,
  } = props;

  return (
    <div className="row job-profile p-2" onClick={onClick}>
      <div className="col-12 title px-0">
        {title}
      </div>
      <div className="col-11 stats py-1 px-0">
        <div className="row">
          <div className="col-4 pl-0 stat text-left">
            {applicants} Applications
          </div>
          <div className="col-4 px-1 stat text-center">
            {shortlisted} Shortlisted
          </div>
          <div className="col-4 px-1 stat text-center no-border">
            {screening} Others
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
