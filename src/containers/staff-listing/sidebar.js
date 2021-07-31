import React from 'react';
import Select from 'react-select';

const Sidebar = props => {

  const { onChange, filterValues, filterOptions } = props;
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
                <Select
                  defaultInputValue={filterValues.vertical}
                  options={filterOptions.vertical}
                  onChange={e => onChange('fitnessVertical', e)}
                />
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-title">
                Role
              </div>
              <div className="dropdown">
                <Select
                  defaultInputValue={filterValues.role}
                  options={filterOptions.role}
                  onChange={e => onChange('role', e)}
                />
              </div>
            </div>
            <div className="filter-section">
              <div className="filter-title">
                Hourly Rate
              </div>
              <div className="dropdown">
                <Select
                  defaultInputValue={filterValues.hourlyRate}
                  options={filterOptions.hourlyRate}
                  onChange={e => onChange('hourlyRate', e)}
                />
              </div>
            </div>
            <div className="filter-section">
              <div className="filter-title">
                Distance (miles)
              </div>
              <div className="dropdown">
                <Select
                  defaultInputValue={filterValues.distance}
                  options={filterOptions.distance}
                  onChange={e => onChange('distance', e)}
                />
              </div>
            </div>
            <div className="filter-section">
              <div className="filter-title">
                Key Skills
              </div>
              <div className="dropdown">
                <Select
                  defaultValue={filterValues.keySkills}
                  isMulti
                  options={filterOptions.keySkills}
                  onChange={e => onChange('keySkills', e)}
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
                <Select
                  defaultInputValue={filterValues.activeFrom}
                  options={filterOptions.activeFrom}
                  onChange={e => onChange('activeFrom', e)}
                />
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-title">
                Time Slot
              </div>
              <div className="dropdown">
                <Select
                  defaultInputValue={filterValues.timeSlot}
                  options={filterOptions.timeSlot}
                  onChange={e => onChange('timeSlot', e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
