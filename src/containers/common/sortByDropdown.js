import React from 'react';
import Select from 'react-select';

const customStyles = {
  control: base => ({
    ...base,
    height: 30,
    minHeight: 36,
    width: 160,
    borderRadius: 3,
    border: '1px solid #D5D9DE',
    paddingBottom: 3
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: '36px',
    padding: '0 6px',
    borderRadius: 3,
    paddingBottom: 10
  }),
  input: (provided, state) => ({
    ...provided,
    margin: -3,
    fontSize: 14,
    opacity: 0.7
  }),
};

const SortByDropdown = () => {
  return (
    <Select
      className="ml-3 sort-by"
      styles={customStyles}
      defaultInputValue={'Sort by "Date"'}
    />
  );
};

export default SortByDropdown;
