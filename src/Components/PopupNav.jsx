import Logo from "./logo";
import { useRef } from "react";
import menu from '../Images/hamburger20.png'
import Menu1 from './hamburger'


const PopupNav = () => {
  const componentRef = useRef(null);

  return (
    <div ref={componentRef} className="mb-[5rem] text-[#100A42]">
      <nav className="bg-transparent py-4 w-full top-0 fixed h-[6rem] z-10 flex shadow-md hover:shadow-xl  hover:bg-blue-100">
        <div className="container ">
          <div className="flex items-center justify-around">
            <Logo />
            <div className="responsive font-semibold flex gap-4"></div>

            
            <div className="absolute inset-0 bg-black opacity-10"></div>

            <div className="relative z-10 ">
            <Menu1/>
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PopupNav;
