import React from 'react';
import Modal from './modal';
import CustomCheckbox from './customCheckbox';
import calendar from '../../assets/icons/calendar.png';

const AppointmentModal = (props) => {
    const selectedSlot = props.shortListData;
    const handleOnChange = () => null;

    return (
        <Modal
            title="Appointment Booking"
            handleCancel={props.handleCancel}
            handleSend={props.handleSend}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-3 modal-label">
                        From:
                    </div>
                    <div className="col-md-9">
                        {props.from}
                    </div>
                    <div className="col-md-3 modal-label">
                        To:
                    </div>
                    <div className="col-md-9">
                        {props.to}
                    </div>
                    <div className="col-md-3 modal-label">
                        Subject line:
                    </div>
                    <div className="col-md-9">
                        <input type="text" className="form-control" value={props.subject} />
                    </div>
                    <div className="col-md-3 modal-label">
                        Body:
                    </div>
                    <div className="col-md-9">
                        <input type="text" className="form-control" value={props.body} />
                    </div>
                    <div className="col-md-3 modal-label">
                        Appointment on:
                    </div>
                    <div className="col-md-9">
                        <div className="input-group date-selector">
                            <label>Start Date</label>
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <img src={calendar} className="img-responsive img-calendar" />
                                </div>
                            </div>
                            <input type="text" className="form-control" value={props.startDate}/>
                        </div>
                        <div className="input-group date-selector">
                            <label>End Date</label>
                            <div className="input-group-prepend">
                                <div className="input-group-text">
                                    <img src={calendar} className="img-responsive img-calendar" />
                                </div>
                            </div>
                            <input type="text" className="form-control" value={props.endDate}/>
                        </div>
                    </div>
                    <div className="col-md-3 modal-label">
                        Selected time slots:
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AppointmentModal;
