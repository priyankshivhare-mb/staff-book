import React from 'react';
import Select from 'react-select';

const Sidebar = () => {
  const keySkillsSelectOptions = [
    {value: 'vikram-yoga', label: 'Vikram Yoga'},
    {value: 'raja-yoga', label: 'Raja Yoga'}
  ];

  return (
    <>
      <div className="section">
        <div className="row">
          <div className="col-12 header">
            Filters
          </div>
          <div className="col-12 body">
            <div className="filter-section">
              <div className="filter-title">
                Fitness Vertical
              </div>
              <div className="dropdown">
                <Select defaultInputValue="Wellness" />
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-title">
                Role
              </div>
              <div className="dropdown">
                <Select defaultInputValue="Yoga Trainer" />
              </div>
            </div>
            <div className="filter-section">
              <div className="filter-title">
                Hourly Rate
              </div>
              <div className="dropdown">
                <Select defaultInputValue="Less than $20" />
              </div>
            </div>
            <div className="filter-section">
              <div className="filter-title">
                Distance
              </div>
              <div className="dropdown">
                <Select defaultInputValue="Less than 5 Miles" />
              </div>
            </div>
            <div className="filter-section">
              <div className="filter-title">
                Key Skills
              </div>
              <div className="dropdown">
                <Select
                  defaultValue={keySkillsSelectOptions[0]}
                  isMulti
                  options={keySkillsSelectOptions}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="row">
          <div className="col-12 header">
            Options
          </div>
          <div className="col-12 body">
            <div className="filter-section">
              <div className="filter-title">
                Active From
              </div>
              <div className="dropdown">
                <Select defaultInputValue="Last 30 days" />
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-title">
                Time Slot
              </div>
              <div className="dropdown">
                <Select defaultInputValue="6:00 AM - 9:00 AM" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
