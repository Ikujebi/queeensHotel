import logoimg from "../images/logoQ.png"

const logo = () => {
  return (
    <div className="logo w-[20rem] xl:ml-[3rem]  inline-flex  gap-1">
      <img src={logoimg} alt="logo" className=" w-[4.5rem] h-[4.2rem]" />
      
    </div>
  );
};

export default logo;
