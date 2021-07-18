import React from 'react';

const ProfileBio = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 profile-bio-wrapper">
                <h3>Profile</h3>
                <div className="row">
                    <div className="col-md-6">
                        <label>Role</label><span>{props.role}</span><br/>
                        <label>Fitness Vertical</label><span>{props.fitnessVertical}</span>
                    </div>
                    <div className="col-md-6">
                        <label>Desired Pay (Hourly)</label><span>{props.wage}</span><br/>
                        <label>Negotiable</label><span>{props.negotiable ? 'Yes' : 'No'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileBio;
