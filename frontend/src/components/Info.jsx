import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ✅ Solid icons
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// ✅ Brand icons
import {
  faTelegram,
  faFacebook,
  faXTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Info = () => {
  return (
    <section className='w-full h-[3vh] bg-primary flex items-center justify-center'>
      <div className='w-[90%] h-full flex items-center justify-between text-[0.7rem] p-2'>
        <div className='flex gap-6'>
          <p className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faPhone} className='text-golden' />
            <span className='text-white'>+251-975-187-862</span>
          </p>
          <p className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faEnvelope} className='text-golden' />
            <span className='text-white'>danielkibret8@gmail.com</span>
          </p>
        </div>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faTelegram} size="lg" className='text-golden mx-2' />
          <FontAwesomeIcon icon={faFacebook} size="lg" className='text-golden mx-2' />
          <FontAwesomeIcon icon={faXTwitter} size="lg" className='text-golden mx-2' />
          <FontAwesomeIcon icon={faYoutube} size="lg" className='text-golden mx-2' />
        </div>
      </div>
    </section>
  );
};

export default Info;
