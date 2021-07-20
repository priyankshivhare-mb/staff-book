import React, { useState } from 'react';
import Calendar from 'react-calendar';
import CustomCheckbox from './customCheckbox';
import 'react-calendar/dist/Calendar.css';

const AppointmentCard = (props) => {
    const [currentDate, onDateChange] = useState(new Date());
    const [selectedSlot, onSlotChange] = useState({'02:00 PM': true});

    const handleOnChange = (selection, label) => {
        onSlotChange({...selectedSlot, [label]: selection});
    }

    return (
        <div className="row">
            <div className="col-md-12 appointment-wrapper">
                <h3>Booking Request <span>View All</span></h3>
                <div className="col-md-12 calendar-wrapper">
                    <Calendar
                        onChange={onDateChange}
                        value={currentDate}
                        showNavigation={true}
                    />
                </div>
                <h3 className="sec-heading">Select Available Slot</h3>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <CustomCheckbox
                                id="schedule"
                                label="06:00 AM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["06:00 AM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="07:00 AM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["07:00 AM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="08:00 AM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["08:00 AM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="09:00 AM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["09:00 AM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="10:00 AM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["10:00 AM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="11:00 AM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["08:00 AM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="12:00 PM"
                                disabled={true}
                                onChange={handleOnChange}
                                checked={selectedSlot["12:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="01:00 PM"
                                disabled={true}
                                onChange={handleOnChange}
                                checked={selectedSlot["01:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                        </div>
                        <div className="col-md-6">
                            <CustomCheckbox
                                id="schedule"
                                label="02:00 PM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["02:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="03:00 PM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["03:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="04:00 PM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["04:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="05:00 PM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["05:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="06:00 PM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["06:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="07:00 PM"
                                disabled={false}
                                onChange={handleOnChange}
                                checked={selectedSlot["07:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="08:00 PM"
                                disabled={true}
                                onChange={handleOnChange}
                                checked={selectedSlot["08:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                            <CustomCheckbox
                                id="schedule"
                                label="09:00 PM"
                                disabled={true}
                                onChange={handleOnChange}
                                checked={selectedSlot["09:00 PM"]}
                                selectedSlot={selectedSlot}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 short-list-wrapper">
                            <button className="btn" onClick={() => props.handleShortlist(selectedSlot)}>Shortlist Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;
