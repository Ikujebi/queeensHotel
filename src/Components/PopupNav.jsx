import Logo from "./logo";
import { useRef } from "react";
import logo from '../Images/logoQ.png'
import logo1 from '../Images/logoQ.png'


const PopupNav = () => {
    const componentRef = useRef(null);
  return (
    <div ref={componentRef} className=" mb-[5rem] text-[#100A42] h-10">
        <nav className="bg-white py-4 w-full top-0 fixed z-10 flex shadow-md hover:shadow-xl px-[3rem] hover:bg-blue-100">
          <div className="container mx-auto">
            <div className="flex items-center mx-2rem">
              <Logo />
              <div className="responsive font-semibold flex gap-4"></div>

              <div className=" bg-black">
                <img 
                  src={logo1}
                  alt="profileImg"
                  className="w-[1.3rem] h-[1.4rem]"
                />
                
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default PopupNav
