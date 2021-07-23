import React from 'react';
import star from '../../assets/icons/star.png';

const OtherLocationCards = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 other-location-card-wrapper">
                <h3>Other Locations <span className="pull-right">Ratings</span></h3>
                <div className="row">
                    <div className="col-md-12 location-container">
                        <div className="location-row">
                            Gold’s Gym, Austin
                            <span className="score pull-right"><img src={star} className="img-responsive"/> 4.4</span>
                        </div>
                        <div className="location-row">
                            Gold’s Gym, Jacksonville
                            <span className="score pull-right"><img src={star} className="img-responsive"/> 4.4</span>
                        </div>
                        <div className="location-row">
                            Gold’s Gym, Chicago
                            <span className="score pull-right"><img src={star} className="img-responsive"/> 4.4</span>
                        </div>
                        <div className="location-row">
                            Gold’s Gym, San Diego
                            <span className="score pull-right"><img src={star} className="img-responsive"/> 4.4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherLocationCards;
