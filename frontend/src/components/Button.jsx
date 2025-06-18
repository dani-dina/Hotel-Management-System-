const Button = ({ className, onClick, href, title, span }) => {
    const classes = 'rounded-md text-white cursor-pointer';
  
    if (href) {
      return (
        <a className={`${classes} ${className}`} href={href}>
          <span className={`flex items-center justify-center mx-[1em] ${span}`}>
            {title}
          </span>
        </a>
      );
    }
  
    return (
      <button className={`${classes} ${className}`} onClick={onClick}>
        <span className={`flex items-center justify-center mx-[1em] ${span}`}>
          {title}
        </span>
      </button>
    );
  };
  
  export default Button;
  