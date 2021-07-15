import React from 'react';

import ShortProfileCard from './shortProfileCard.js';
import DashboardWidget from '../../dashboardWidget.js';

import staffProfiles from '../../../../fixtures/staffProfiles.json';

export default () => (
  <DashboardWidget
    title="Booked Staff on Call"
    toLink="#"
    badgeText="20 Bookings"
  >
    <ShortProfileCard {...staffProfiles[4]} />
    <ShortProfileCard {...staffProfiles[5]} />
    <ShortProfileCard {...staffProfiles[6]} />
  </DashboardWidget>
);
