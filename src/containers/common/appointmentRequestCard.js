import React from 'react';

const AppointmentRequestCard = (props) => {
    return (
        <div className="row">
            <div className="col-md-12 appointment-request-wrapper">
                <h3>Staff-On Call Request Details</h3>
                <div className="row">
                    <div className="col-md-12 appointment-details">
                        <div>
                            <label>Studio Name</label><span>{props.studioName}</span>
                        </div>
                        <div>
                            <label>Location</label><span>{props.location}</span>
                        </div>
                        <div>
                            <label>Date</label><span>{props.date}</span>
                        </div>
                        <div>
                            <label>Time</label><span>{props.time}</span>
                        </div>
                    </div>
                    <div className="col-md-12 appointment-cta">
                        <button className="btn primary" onClick={props.onClick}>Accept Booking Request</button>
                        <button className="btn secondary">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentRequestCard;
