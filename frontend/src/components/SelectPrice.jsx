import { useState, useRef, useEffect } from 'react';

const PriceRangeSelector = ({ min = 0, max = 5000, step = 50 }) => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(5000);
  const range = useRef(null);

  // Update track fill width
  useEffect(() => {
    if (range.current) {
      const minPercent = ((minVal - min) / (max - min)) * 100;
      const maxPercent = ((maxVal - min) / (max - min)) * 100;
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, min, max]);

  return (
    <div className="w-full max-w-md mx-auto ">
      <label className="block text-sm font-semibold text-gray-800 mb-4">
        Price Range: ${minVal} - ${maxVal}
      </label>

      <div className="relative top-2 h-3 w-3/4  rounded-full bg-primary  ">
        {/* Active track */}
        <div
          ref={range}
          className="absolute h-full bg-primary rounded-full"
        />

        {/* Left Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minVal}
          onChange={(e) =>
            setMinVal(Math.min(Number(e.target.value), maxVal - step))
          }
          className="absolute w-full h-3 appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:bg-primary
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:-mt-1
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:bg-primary
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:pointer-events-auto"
          style={{ zIndex: minVal > max - 100 ? '5' : '10' }}
        />

        {/* Right Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxVal}
          onChange={(e) =>
            setMaxVal(Math.max(Number(e.target.value), minVal + step))
          }
          className="absolute w-full h-3 appearance-none bg-transparent pointer-events-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:bg-primary
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:shadow-md
            [&::-webkit-slider-thumb]:-mt-1
            [&::-moz-range-thumb]:h-5
            [&::-moz-range-thumb]:w-5
            [&::-moz-range-thumb]:bg-primary
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:pointer-events-auto"
        />
      </div>
    </div>
  );
};

export default PriceRangeSelector;
