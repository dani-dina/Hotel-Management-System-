import EventCalendar from '../components/EventCalendar';
import EventList from '../components/EventList';

const Events = () => {
  const [view, setView] = useState('list'); // 'list' or 'calendar'

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Events & Meetings</h1>
        <div className="flex space-x-2">
          <button onClick={() => setView('list')} className={`px-4 py-2 ${view === 'list' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            List View
          </button>
          <button onClick={() => setView('calendar')} className={`px-4 py-2 ${view === 'calendar' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            Calendar View
          </button>
        </div>
      </div>
      
      {view === 'list' ? <EventList /> : <EventCalendar />}
      
      <div className="mt-12 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Plan Your Event</h2>
        <p className="mb-6">Contact our events team to book your next meeting or special occasion.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Request Proposal
        </button>
      </div>
    </div>
  );
};

export default Events;