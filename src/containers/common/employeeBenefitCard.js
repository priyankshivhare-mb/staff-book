import React from 'react';

const EmployeeBenefitCard = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 employee-benefit-card-wrapper">
                <h3>Employee Benefits <span className="pull-right">Review</span></h3>
                <div className="row">
                    <div className="col-md-12 benefit-container">
                        <div className="benefit-row">
                            <span className="highlight">82%</span> Work/Life Balance
                            <span className="score pull-right">32</span>
                        </div>
                        <div className="benefit-row">
                            <span className="highlight">90%</span> Career Development
                            <span className="score pull-right">28</span>
                        </div>
                        <div className="benefit-row">
                            <span className="highlight">89%</span> Compensation, Benefits & Perks
                            <span className="score pull-right">39</span>
                        </div>
                        <div className="benefit-row">
                            <span className="highlight">78%</span> Working Environment
                            <span className="score pull-right">30</span>
                        </div>
                        <div className="benefit-row">
                            <span className="highlight">93%</span> Diversity and Equal Opportunity
                            <span className="score pull-right">27</span>
                        </div>
                        <div className="benefit-row">
                            <span className="highlight">89%</span> Culture Rating
                            <span className="score pull-right">32</span>
                        </div>
                        <div className="benefit-row">
                            <span className="highlight">99%</span> Job Security
                            <span className="score pull-right">30</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeBenefitCard;
