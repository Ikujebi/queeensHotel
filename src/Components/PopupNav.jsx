import Logo from "./logo";
import { useRef } from "react";
import logo1 from '../Images/logoQ.png';

const PopupNav = () => {
  const componentRef = useRef(null);

  return (
    <div ref={componentRef} className="mb-[5rem] text-[#100A42]">
      <nav className="bg-transparent py-4 w-full top-0 fixed h-[6rem] z-10 flex shadow-md hover:shadow-xl px-[3rem] hover:bg-blue-100">
        <div className="container mx-auto">
          <div className="flex items-center">
            <Logo />
            <div className="responsive font-semibold flex gap-4"></div>

            {/* Use a div for the transparent overlay */}
            <div className="absolute inset-0 bg-black opacity-10"></div>

            <div className="relative z-10 bg-black">
              <img
                src={logo1}
                alt="profileImg"
                className="w-[1.3rem] h-[1.4rem]"
              />
              {/* Add more navigation items or content here */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default PopupNav;
