import React from 'react';

import ShortProfileCard from '../../common/shortProfileCard.js';
import DashboardWidget from '../dashboardWidget.js';

import staffProfiles from '../../../fixtures/staffProfiles.json';

export default () => (
  <DashboardWidget
    title="Staff Waitlist"
    toLink="#"
    badgeText="10 Profiles"
  >
    <div>ASD</div>
  </DashboardWidget>
);
