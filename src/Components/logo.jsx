import logoimg from "../images/logoQ.png"

const logo = () => {
  return (
    <div className="logo w-[20rem] xl:ml-[3rem]  inline-flex  gap-1">
      <img src={logoimg} alt="logo" className=" w-[2.2rem] h-[2.2rem]" />
      
    </div>
  );
};

export default logo;
