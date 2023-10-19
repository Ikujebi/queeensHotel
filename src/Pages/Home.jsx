import Nav from '../Components/PopupNav'


const Home = () => {

const promises =[
  


]
 const pic1 ="https://queenscourthotel.ng/wp-content/uploads/2023/10/20230921_181550-scaled.jpg"
 const pic2 = 'https://queenscourthotel.ng/wp-content/uploads/2023/10/20231009_172600-scaled.jpg'
  const videoFile = "https://queenscourthotel.ng/wp-content/uploads/2023/10/OPENING-1.mp4"
  return (
    <div className=' '>
      <div className='  '>
      <video
        autoPlay
        loop
        muted
        className=" relative inset-0 w-full h-[100svh] object-cover "
      >
        <source src={videoFile} type="video/mp4" />
        
      </video>
        <div className="absolute w-full h-screen opacity-70 bg-black top-0"></div>
      <Nav/>

    <div  className=' absolute inset-0 flex flex-col mt-[20rem] items-center text-white'>
      <div id='text ' className=' text-[2.4rem]'>
        <h2 >Enjoy Confort And Luxury Uncompromised</h2>
      </div>

      <div>
        <div className=' '>
        <h2>Class</h2>
        <p>We offer our visitors the best class in hospitality
           service from reception to their departure with 
           memoirs to treasure.</p>
           </div>
      </div>
      </div>
      
      </div>
      <div className=' mt-[60rem]'>
        <img src={pic1} alt="dd" />
      </div>

    </div>
  )
}

export default Home
