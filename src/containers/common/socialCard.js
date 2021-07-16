import React from 'react';

const SocialCard = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 social-wrapper">
                <div className="row">
                    <div className="col-md-2">
                        <img src={props.icon} className="img-responsive social-icon"/>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col username">
                                {props.username}
                            </div>
                        </div>
                        <div className="row action-wrapper">
                            <div className="col font-light">
                                {props.attr1}
                            </div>
                            <div className="col font-light">
                                {props.attr2}
                            </div>
                            <div className="col font-light">
                                {props.attr3}
                            </div>
                            <span className="profile-selector">Profile</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialCard;
