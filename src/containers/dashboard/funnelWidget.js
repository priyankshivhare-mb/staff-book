import React from 'react';

import DashboardWidget from './dashboardWidget';
import JobProfile from './jobProfile';

import FunnelAggPng from '../../assets/icons/funnel-graphs/1.png';
import Funnel1Png from '../../assets/dashboard-cta.png';

class FunnelWidget extends React.Component {
  constructor(props){
    super(props);

    this.state = { currentFunnel: FunnelAggPng };
  }

  selectFunnelGraph(graphKey) {
    const map = {
      1: Funnel1Png,
      2: Funnel1Png,
      3: Funnel1Png,
      4: Funnel1Png,
    };

    this.setState({ currentFunnel: map[graphKey] });
  }

  render() {
    const { currentFunnel } = this.state;

    return (
      <DashboardWidget
        title="Active Job Posts"
        toLink="#"
        badgeText="4"
      >
        <div className="row">
          <div className="col-5 px-0 job-profiles">
            <JobProfile
              title="Gym Consultant"
              applicants="14"
              shortlisted="2"
              rejected="5"
              trending={true}
              onClick={() => this.selectFunnelGraph(1)}
            />
            <JobProfile
              title="HR Associate"
              applicants="9"
              shortlisted="1"
              rejected="3"
              onClick={() => this.selectFunnelGraph(2)}
            />
            <JobProfile
              title="Front-Desk Coordinator"
              applicants="3"
              shortlisted="3"
              rejected="0"
              trending={true}
              onClick={() => this.selectFunnelGraph(3)}
            />
            <JobProfile
              title="Markets Facilitator"
              applicants="5"
              shortlisted="1"
              rejected="4"
              onClick={() => this.selectFunnelGraph(4)}
            />
          </div>
          <div className="col-7">
            <img src={currentFunnel} className="p-2" style={{height: 'inherit'}} />
          </div>
        </div>
      </DashboardWidget>
    );
  }
};

export default FunnelWidget;
