import React from 'react';

import ShortProfileCard from './shortProfileCard.js';
import DashboardWidget from '../../dashboardWidget.js';

import staffProfiles from '../../../../fixtures/staffProfiles.json';

const RequestStaffOnCallWidget = () => (
  <DashboardWidget
    title="Request Staff On Call"
    toLink="#"
    badgeText="20 Profiles"
  >
    <ShortProfileCard {...staffProfiles[1]} />
    <ShortProfileCard {...staffProfiles[2]} />
    <ShortProfileCard {...staffProfiles[3]} />
  </DashboardWidget>
);

export default RequestStaffOnCallWidget;
