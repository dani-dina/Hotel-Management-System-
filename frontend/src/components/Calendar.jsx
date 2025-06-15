import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const DatePickerComponent = ({title}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="w-3/4 max-w-sm mx-auto ">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {title}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMMM d, yyyy"
        placeholderText="Click to select a date"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
      />
    </div>
  );
};

export default DatePickerComponent;
