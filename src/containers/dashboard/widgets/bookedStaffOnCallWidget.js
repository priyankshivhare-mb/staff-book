import React from 'react';

import ShortProfileCard from '../../common/shortProfileCard.js';
import DashboardWidget from '../dashboardWidget.js';

import staffProfiles from '../../../fixtures/staffProfiles.json';

export default () => (
  <DashboardWidget
    title="Booked Staff on Call"
    toLink="#"
    badgeText="20 Bookings"
  >
    <div>ASD</div>
  </DashboardWidget>
);
