import React from 'react';
import Modal from './modal';
import Select from 'react-select';

import calendar from '../../assets/icons/calendar.png';
import clock from '../../assets/icons/clock.png';
import location from '../../assets/icons/location-pin.png';

const customStyles = {
  control: base => ({
    ...base,
    minHeight: 31,
    maxHeight:32,
    borderRadius: 3,
    border: '1px solid #D5D9DE',
    paddingBottom: 3
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: 31,
    padding: '0 6px',
    borderRadius: 3,
    paddingBottom: 10
  }),
  input: (provided, state) => ({
    ...provided,
    margin: -3,
    fontSize: 14,
    opacity: 0.7,
    paddingLeft: 10
  }),
  indicatorSeparator: base => ({
    ...base,
    display: "none"
  }),
};

const appointmentMessage = `Dear Jennifer,
We are pleased to inform that your appointment is all set for Power Yoga.
When: Thursday, 02-August-2021 at 2 pm onwards.
Total price: 28$/hour

Thanks,
Team Power Fitness`;

const AppointmentModal = (props) => {
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
        </div>
        <div className="row">
          <div className="col-md-3 modal-label">
            To:
          </div>
          <div className="col-md-9">
            {props.to}
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 modal-label">
            Subject line:
          </div>
          <div className="col-md-9">
            <input type="text" className="form-control form-input" value={props.subject} />
          </div>
        </div>
        <div className="row appointment-row">
          <div className="col-md-3 modal-label">
            Appointment:
          </div>
          <div className="col-md-9">
            <Select
                className="form-input"
                styles={customStyles}
                defaultInputValue="Vikram Yoga"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 modal-label">
            Date and Time:
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <div className="input-group date-selector">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <img src={calendar} className="img-responsive img-calendar" />
                    </div>
                  </div>
                  <input type="text" className="form-control" value={props.startDate}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group date-selector">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <img src={clock} className="img-responsive img-calendar" />
                    </div>
                  </div>
                  <input type="text" className="form-control" value={props.time}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 modal-label">
          </div>
          <div className="col-md-9 schedule-button">
            <button className="btn mt-0"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M13 6.68571C13 10.09 10.09 13 6.68571 13C2.91002 13 0 10.09 0 6.68571C0 2.91002 2.91002 0 6.68571 0C10.09 0 13 2.91002 13 6.68571ZM6 3H7V6H10V7H7V10H6V7H3V6H6V3Z" fill="#0A7C8E"/>
                          </svg>
              Add Schedule</button>
          </div>
          <div className="col-md-3 modal-label">
            Location:
          </div>
          <div className="col-md-6">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <img src={location} className="img-responsive img-calendar" />
                </div>
              </div>
              <input type="text" className="form-control" value={props.zoomLink}/>
            </div>
          </div>
          <div className="col-md-3 zoom-link">
            Zoom Link
            <svg width="53" height="28" viewBox="0 0 53 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="53" height="28" rx="14" fill="#0A7C8E"/>
              <g filter="url(#filter0_d)">
                <circle cx="39" cy="14" r="10" fill="white"/>
              </g>
              <defs>
                <filter id="filter0_d" x="26" y="2" width="26" height="26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="1"/>
                  <feGaussianBlur stdDeviation="1.5"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.176471 0 0 0 0 0.176471 0 0 0 0 0.176471 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                </filter>
              </defs>
            </svg>

          </div>
        </div>
        <div className="row">
          <div className="col-md-3 modal-label">
            Message:
          </div>
          <div className="col-md-9">
            <textarea
              type="text"
              className="form-control"
              value={appointmentMessage}
              style={{height: 190, lineHeight: 1.2}}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AppointmentModal;
