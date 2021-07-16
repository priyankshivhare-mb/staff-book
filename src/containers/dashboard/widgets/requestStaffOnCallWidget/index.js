import React from 'react';

import ShortProfileCard from '../shortProfileCard.js';
import DashboardWidget from '../../dashboardWidget.js';

const RequestStaffOnCallWidget = props => {
  const { profiles } = props;

  return (
    <DashboardWidget
      title="Book Staff On Call"
      toLink="#"
      badgeText="20 Profiles"
    >
      <ShortProfileCard {...profiles[1]} showRating={true} />
      <ShortProfileCard {...profiles[2]} showRating={true} />
      <ShortProfileCard {...profiles[3]} showRating={true} />
    </DashboardWidget>
  );
};

export default RequestStaffOnCallWidget;
