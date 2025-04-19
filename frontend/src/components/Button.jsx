const Button = ({className,onClick,href,title,span})=>{

       const classes = 'rounded-md text-white cursor-pointer';
    // const renderLink = ()=>{
    //     <a className={`${classes} ${className}`} href={href}>
    //         <span>{title}</span>
    //     </a>
    // }

    // const renderButton = ()=>{
    //     <button className={`${classes} ${className}`} onClick={onClick}>
    //         <span>{title}</span>
    //     </button>
    // }

    // return renderButton; 
    return(
        <button className={`${classes} ${className}`} onClick={onClick}>
        <span className={`flex items-center justify-center mx-[1em] ${span}`}>{title}</span>
        </button>
    );
}

export default Button;