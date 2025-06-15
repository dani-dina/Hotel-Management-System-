import CountUp from 'react-countup';

const stats = [
  { value: 25000, label: 'Customers', suffix: '+', duration: 2 },
  { value: 18000, label: 'Bookings', suffix: '+', duration: 2 },
  { value: 120, label: 'Locations', suffix: '', duration: 2 },
  { value: 10, label: 'Years Experience', suffix: '+', duration: 2 },
];

const StatsSection = () => {
  return (
    <div className="w-full mx-auto h-full flex items-center justify-between  gap-4 flex-wrap">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="w-full sm:w-[45%] md:w-[22%]  p-6 text-center"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            <CountUp
              end={stat.value}
              duration={stat.duration}
              separator=","
              suffix={stat.suffix}
            />
          </h1>
          <p className="text-gray-100 text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
