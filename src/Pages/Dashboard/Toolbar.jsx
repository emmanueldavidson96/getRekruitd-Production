import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Select from 'react-select';


const customStyles = {
  option: (provided) => ({
    ...provided,
    fontSize: '14px',
  }),
  control: (provided) => ({
    ...provided,
    margin: '8px 0',
    borderRadius: '8px',
    boxShadow: 'none',
    height: '40px',
    border: '2px solid #ddd',
    '&:hover': {
      border: '1px solid #aaa',
      zIndex: 9999,
      
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    fontSize: '14px',
    color: '#888',
    fontFamily: 'sharp sans',
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 9999, // Ensures the dropdown menu stays on top
  }),
};

const CustomToolbar = ({ date, view, onNavigate, onView }) => {
  const handlePrev = () => onNavigate('PREV');
  const handleNext = () => onNavigate('NEXT');

  // Options for react-select
  const viewOptions = [
    { value: 'month', label: 'Month' },
    { value: 'week', label: 'Week' },
    { value: 'day', label: 'Day' },
  ];

  // Handle view change using react-select
  const handleViewChange = (selectedOption) => {
    onView(selectedOption.value);
  };

  // Get current view for react-select
  const selectedView = viewOptions.find((option) => option.value === view);

  return (
    <div className="custom-toolbar">
      <div>
        <button onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <span>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      <div className="view-switcher">
        <Select
          value={selectedView}
          onChange={handleViewChange}
          options={viewOptions}
          className="react-select-container"
          classNamePrefix="react-select"
          isSearchable={false}
          styles={customStyles}
        />
      </div>
    </div>
  );
};

export default CustomToolbar;
