import React from 'react';

import ShortProfileCard from '../../common/shortProfileCard.js';
import DashboardWidget from '../dashboardWidget.js';

import staffProfiles from '../../../fixtures/staffProfiles.json';

export default () => (
  <DashboardWidget
    title="Request Staff On Call"
    toLink="#"
    badgeText="20 Profiles"
  >
    <ShortProfileCard {...staffProfiles[1]} />
  </DashboardWidget>
);
