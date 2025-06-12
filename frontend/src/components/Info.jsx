import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faTelegram,
  faFacebook,
  faXTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Info = () => {
  const contactInfo = [
    {
      icon: faPhone,
      text: '+251-975-187-862',
      href: 'tel:+251975187862'
    },
    {
      icon: faEnvelope,
      text: 'danielkibret8@gmail.com',
      href: 'mailto:danielkibret8@gmail.com'
    }
  ];

  const socialMedia = [
    { icon: faTelegram, url: 'https://t.me/' },
    { icon: faFacebook, url: 'https://facebook.com/' },
    { icon: faXTwitter, url: 'https://twitter.com/' },
    { icon: faYoutube, url: 'https://youtube.com/' }
  ];

  return (
    <section className='hidden lg:flex w-full bg-primary py-1'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
          {/* Contact Info - Stack on mobile view */}
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
            {contactInfo.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className='flex items-center gap-2 text-white hover:text-golden transition-colors text-xs sm:text-sm'
                aria-label={item.icon === faPhone ? 'Call us' : 'Email us'}
              >
                <FontAwesomeIcon 
                  icon={item.icon} 
                  className='text-golden' 
                  fixedWidth
                />
                <span>{item.text}</span>
              </a>
            ))}
          </div>

          <div className='flex items-center justify-center md:justify-end gap-3 sm:gap-4'>
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-golden hover:text-white transition-colors'
                aria-label={`Follow us on ${social.icon.iconName}`}
              >
                <FontAwesomeIcon 
                  icon={social.icon} 
                  size='lg'
                  className='w-4 h-4 sm:w-5 sm:h-5'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;