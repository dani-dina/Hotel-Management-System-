import { useState, useRef, useEffect } from 'react';

const PriceRangeSelector = ({ min = 0, max = 5000, step = 50 }) => {
  const [minVal, setMinVal] = useState(500);
  const [maxVal, setMaxVal] = useState(3000);
  const range = useRef(null);

  // Update range track width on change
  useEffect(() => {
    if (range.current) {
      const minPercent = ((minVal - min) / (max - min)) * 100;
      const maxPercent = ((maxVal - min) / (max - min)) * 100;
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, min, max]);

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      <label className="block text-sm font-semibold text-gray-800 mb-4">
        Price Range: ${minVal} - ${maxVal}
      </label>

      <div className="relative h-3 rounded-full bg-gray-200">
        {/* Active range */}
        <div ref={range} className="absolute h-full bg-blue-500 rounded-full" />

        {/* Left Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - step);
            setMinVal(value);
          }}
          className="absolute w-full h-3 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: minVal > max - 100 ? '5' : '10' }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + step);
            setMaxVal(value);
          }}
          className="absolute w-full h-3 appearance-none bg-transparent pointer-events-none"
        />
      </div>
      <style>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          background-color: primary;
          border-radius: 50%;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
          margin-top: -8.5px;
        }
        input[type='range']::-moz-range-thumb {
          height: 20px;
          width: 20px;
          background-color: primary;
          border-radius: 50%;
          cursor: pointer;
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
};

export default PriceRangeSelector;
