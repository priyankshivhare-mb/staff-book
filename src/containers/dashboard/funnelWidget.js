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
              title="Gym Trainer"
              applicants="14"
              shortlisted="2"
              screening="5"
              trending={true}
              onClick={() => this.selectFunnelGraph(1)}
            />
            <JobProfile
              title="Sales Specialist"
              applicants="9"
              shortlisted="1"
              screening="3"
              onClick={() => this.selectFunnelGraph(2)}
            />
            <JobProfile
              title="Front-Desk Coordinator"
              applicants="3"
              shortlisted="3"
              screening="0"
              trending={true}
              onClick={() => this.selectFunnelGraph(3)}
            />
            <JobProfile
              title="Physiotherapist"
              applicants="5"
              shortlisted="1"
              screening="4"
              onClick={() => this.selectFunnelGraph(4)}
            />
          </div>
          <div className="col-7">
            <div style={{height: '271px', overflow: 'hidden'}}>
              <img src={currentFunnel} className="p-2 img-responsive" />
            </div>
          </div>
        </div>
      </DashboardWidget>
    );
  }
};

export default FunnelWidget;
