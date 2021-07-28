import React from 'react';

const CalendarDayView = (props) => {
    return (
        <div className="booking-card">

            <div className="booking">
                <div className="timer"><span className="text">10:00 AM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">
                    <div className="booking-a">
                        <div className="status"></div>
                        <div className="content"><span
                            className="title">Pilates Session, HIIT</span>
                            <div className="booked"><span className="title">James Cameron</span>
                                <div className="border"></div>
                                <span className="time">40min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">11:00 AM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">
                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">12:00 PM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">
                    <div className="booking-a">
                        <div className="status"></div>
                        <div className="content"><span
                            className="title">Zumba and Aerobics for Seniors</span>
                            <div className="booked"><span className="title">Christy Rogahn</span>
                                <div className="border"></div>
                                <span className="time">40min</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-a booking-b">
                        <div className="status"></div>
                        <div className="content"><span
                            className="title">Core and Lower back workout</span>
                            <div className="booked"><span className="title">James Cameron</span>
                                <div className="border"></div>
                                <span className="time">40min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">01:00 PM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">
                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">02:00 PM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">
                    <div className="booking-a booking-a-primary">
                        <div className="status"></div>
                        <div className="content"><span
                            className="title">Yoga Session, Vikram Yoga</span>
                            <div className="booked"><span className="title">Jennifer Long</span>
                                <div className="border"></div>
                                <span className="time">60min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">03:00 PM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">

                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">04:00 PM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">
                    <div className="booking-a">
                        <div className="status"></div>
                        <div className="content"><span
                            className="title">Group Aerobics and Zumba</span>
                            <div className="booked"><span className="title">Christy Rogahn</span>
                                <div className="border"></div>
                                <span className="time">40min</span>
                            </div>
                        </div>
                    </div>
                    <div className="booking-a booking-b">
                        <div className="status"></div>
                        <div className="content"><span
                            className="title">Pranayam and Vikram Yoga</span>
                            <div className="booked"><span className="title">Christy Rogahn</span>
                                <div className="border"></div>
                                <span className="time">40min</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">05:00 PM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">
                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">06:00 PM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">
                </div>
            </div>

            <div className="booking">
                <div className="timer"><span className="text">07:00 PM</span>
                    <div className="border"></div>
                </div>
                <div className="booking-wrapper">

                </div>
            </div>
        </div>
    );
};

export default CalendarDayView;
