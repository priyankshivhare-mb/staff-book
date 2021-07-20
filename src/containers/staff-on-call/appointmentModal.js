import React from 'react';
import Modal from '../common/modal';
import CustomCheckbox from '../common/customCheckbox';

const AppointmentModal = (props) => {
    const selectedSlot = props.shortListData;
    const handleOnChange = () => null;

    return (
        <Modal
            title="Sending email for confirmation"
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
                        Some date
                    </div>
                    <div className="col-md-3 modal-label">
                        Selected time slots:
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3">
                                <CustomCheckbox
                                    id="appointment"
                                    label="06:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["06:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="07:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["07:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="08:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["08:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="09:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["09:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                            </div>
                            <div className="col-md-3">
                                <CustomCheckbox
                                    id="appointment"
                                    label="10:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["10:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="11:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["08:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="12:00 PM"
                                    disabled={true}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["12:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="01:00 PM"
                                    disabled={true}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["01:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                            </div>
                            <div className="col-md-3">
                                <CustomCheckbox
                                    id="appointment"
                                    label="02:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["02:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="03:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["03:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="04:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["04:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="05:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["05:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                            </div>
                            <div className="col-md-3">
                                <CustomCheckbox
                                    id="appointment"
                                    label="06:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["06:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="07:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["07:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="08:00 PM"
                                    disabled={true}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["08:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    id="appointment"
                                    label="09:00 PM"
                                    disabled={true}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["09:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default AppointmentModal;
