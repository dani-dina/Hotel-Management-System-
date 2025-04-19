import { useState } from "react";
import { navigations } from "../constants";
import Button from "./Button";
import logo from '../assets/logo.png';
const Navbar = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  const handleToggleNavigation = () => {
    setToggleNavigation((prev) => !prev);
  };

  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50">
      <div className="w-full flex justify-between items-center px-10">
        <a className="w-[10rem]  p-2" href="/">
          <img src={logo} alt='LUMINARA'/>
        </a>

        {/* Toggle Button */}
        <button
          className="lg:hidden cursor-pointer text-white bg-red-700"
          onClick={handleToggleNavigation}
        >
          {toggleNavigation ? <span>X</span> : <span>Menu</span>}
        </button>

        <nav
          className={`${
            toggleNavigation ? "flex" : "hidden"
          } fixed top-[2rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigations.map((item) => (
              <a className="font-lightbold font-Sora mx-[1em] my-[1em] tracking-wide
                            "key={item.id} href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <div className='flex justify-around'>
        <Button
           className={'hidden lg:flex w-[5em] h-[2.1em] mx-[1em] border border-[#40E0D0]'}
           title={'Login'}
           span={'text-[#40E0D0]'}
        />
                <Button
           className={'hidden lg:flex w-[9em] h-[2.1em] bg-[#40E0D0]'}
           title={'Create Account'}
        />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
