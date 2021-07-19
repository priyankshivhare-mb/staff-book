import React from 'react';
import Modal from '../common/modal';
import CustomCheckbox from '../common/customCheckbox';

const AppointmentModal = (props) => {
    const selectedSlot = {};
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
                        Abc
                    </div>
                    <div className="col-md-3 modal-label">
                        To:
                    </div>
                    <div className="col-md-9">
                        Abc
                    </div>
                    <div className="col-md-3 modal-label">
                        Subject line:
                    </div>
                    <div className="col-md-9">
                        Subject
                    </div>
                    <div className="col-md-3 modal-label">
                        Body:
                    </div>
                    <div className="col-md-9">
                        Some body
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
                                    label="06:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["06:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="07:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["07:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="08:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["08:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="09:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["09:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                            </div>
                            <div className="col-md-3">
                                <CustomCheckbox
                                    label="10:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["10:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="11:00 AM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["08:00 AM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="12:00 PM"
                                    disabled={true}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["12:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="01:00 PM"
                                    disabled={true}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["01:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                            </div>
                            <div className="col-md-3">
                                <CustomCheckbox
                                    label="02:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["02:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="03:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["03:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="04:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["04:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="05:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["05:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                            </div>
                            <div className="col-md-3">
                                <CustomCheckbox
                                    label="06:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["06:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="07:00 PM"
                                    disabled={false}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["07:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
                                    label="08:00 PM"
                                    disabled={true}
                                    onChange={handleOnChange}
                                    checked={selectedSlot["08:00 PM"]}
                                    selectedSlot={selectedSlot}
                                />
                                <CustomCheckbox
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
