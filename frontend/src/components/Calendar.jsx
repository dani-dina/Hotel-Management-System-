import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // default styles


const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="  rounded-xl">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select a Date
      </label>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMMM d, yyyy"
        placeholderText="Click to select a date"
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DatePickerComponent;
