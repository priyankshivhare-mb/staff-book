import React from 'react';

import ShortProfileCard from './shortProfileCard.js';
import DashboardWidget from '../../dashboardWidget';

import staffProfiles from '../../../../fixtures/staffProfiles.json';

export default () => (
  <DashboardWidget
    title="Staff Waitlist"
    toLink="#"
    badgeText="10 Profiles"
  >
    <div>ASD</div>
  </DashboardWidget>
);
