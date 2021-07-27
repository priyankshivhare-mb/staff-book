import React, { useState } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import CalendarDayView from './calendarDayView';

import SortByDropdown from '../../containers/common/sortByDropdown';

import { ReactComponent as Confirmed } from '../../assets/icons/confirmed.svg';
import { ReactComponent as WaitList } from '../../assets/icons/waiting-list.svg';
import { ReactComponent as Pending } from '../../assets/icons/pending.svg';

import BookingCalendar from '../../assets/booking-calendar.png';

import './styles.scss';

const BookingsCalendar = () => {
  const [currentDate, onDateChange] = useState(new Date());

  return (
    <div className="container-fluid bookings-calendar">
      <div className="row header">
        <div className="col-12">
          <div className="staff-on-call-wrapper p-0">
            <div className="row staff-head-wrapper">
              <div className="col-md-4 p-0">
                <h1 className="heading-1">Book Staff On Call</h1>
                <p className="staff-breadcrumb">Dashboard / Staff on Call / Book Staff-on call</p>
              </div>
              <div className="col-md-2" />
              <div className="col-md-6 p-0">
                <div className="float-right d-inline-block pt-3">

                  <div className="form-inline">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fa fa-search"/></span>
                      </div>
                      <input
                        type="text"
                        placeholder="Search"
                        className="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </div>
                    <SortByDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="section bookings-sidebar">
            <div className="col-md-12 appointment-wrapper">
              <div className="col-md-12 calendar-wrapper">
                <Calendar
                  value={currentDate}
                  showNavigation={true}
                />
              </div>
            </div>
          </div>

          <div className="booking-view">
            <div className="booking-view-header">BOOKING VIEW</div>
            <div className="booking-view-option active">Staff-on-Call</div>
            <div className="booking-view-option">Full-Time Staff</div>
            <div className="booking-view-option">All Bookings</div>
          </div>

          <div className="booking-view">
            <div className="booking-view-header">BOOKING VIEW</div>
            <div className="booking-view-option">
              <div className="p-1"><Confirmed className="mr-2" />Booking confirmed</div>
              <div className="p-1"><WaitList className="mr-2" />Waiting list</div>
              <div className="p-1"><Pending className="mr-2" />Status pending</div>
            </div>
          </div>
        </div>
        <div className="col-9">
          <div className="section calendar">
            <CalendarDayView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsCalendar;
