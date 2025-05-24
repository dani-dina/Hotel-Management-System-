import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPhone } from '@fortawesome/free-solid-svg-icons';

const Info = () => {

  return (
    <section className='w-full h-[3vh] bg-primary flex items-center justify-center'>
      <div className='w-[90%] h-full flex items-center justify-between'>
        <div>
          <p>
            <FontAwesomeIcon icon={faPhone} />
            <span className='text-white'>+251-975-187-862</span>
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Info;