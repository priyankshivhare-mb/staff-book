import React, { useState } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';

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
          <div className="section">

            <div className="calendar-container">
              <div className="calendar-header">
                <h1>
                  July
                  <button>▾</button>
                </h1>
                <p>2021</p>
              </div>
              <div className="calendar"><span className="day-name">Mon</span><span className="day-name">Tue</span><span
                  className="day-name">Wed</span><span className="day-name">Thu</span><span
                  className="day-name">Fri</span><span className="day-name">Sat</span><span
                  className="day-name">Sun</span>
                <div className="day day--disabled">28</div>
                <div className="day day--disabled">29</div>
                <div className="day day--disabled">30</div>
                <div className="day">1</div>
                <div className="day">2</div>
                <div className="day">3</div>
                <div className="day">4</div>
                <div className="day">5</div>
                <div className="day">6</div>
                <div className="day">7</div>
                <div className="day">8</div>
                <div className="day">9</div>
                <div className="day">10</div>
                <div className="day">11</div>
                <div className="day">12</div>
                <div className="day">13</div>
                <div className="day">14</div>
                <div className="day">15</div>
                <div className="day">16</div>
                <div className="day">17</div>
                <div className="day">18</div>
                <div className="day">19</div>
                <div className="day">20</div>
                <div className="day">21</div>
                <div className="day">22</div>
                <div className="day">23</div>
                <div className="day">24</div>
                <div className="day">25</div>
                <div className="day">26</div>
                <div className="day">27</div>
                <div className="day">28</div>
                <div className="day">29</div>
                <div className="day">30</div>
                <div className="day">31</div>
                <div className="day day--disabled">1</div>
                <section className="task task--warning">Zumba session</section>
                <section className="task task--danger">Pilates</section>
                <section className="task task--primary">Gym renovation
                </section>
                <section className="task task--info">New Yoga Trainer Appointment
                  <div className="task__detail">
                    <h2>Jennifer Long</h2>
                    <p>21-25th July</p>
                  </div></section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingsCalendar;
