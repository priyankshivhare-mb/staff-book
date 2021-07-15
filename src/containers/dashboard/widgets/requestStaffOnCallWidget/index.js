import React from 'react';

import ShortProfileCard from './shortProfileCard.js';
import DashboardWidget from '../../dashboardWidget.js';

const RequestStaffOnCallWidget = props => {
  const { profiles } = props;

  return (
    <DashboardWidget
      title="Request Staff On Call"
      toLink="#"
      badgeText="20 Profiles"
    >
      <ShortProfileCard {...profiles[1]} />
      <ShortProfileCard {...profiles[2]} />
      <ShortProfileCard {...profiles[3]} />
    </DashboardWidget>
  );
};

export default RequestStaffOnCallWidget;
