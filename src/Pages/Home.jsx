import Nav from '../Components/PopupNav'
import cookie from '../Images/revisitQueens.png'

const Home = () => {

const promises =[
  


]
 const pic1 ="https://queenscourthotel.ng/wp-content/uploads/2023/10/20230921_181550-scaled.jpg"
 const pic2 = 'https://queenscourthotel.ng/wp-content/uploads/2023/10/20231009_172600-scaled.jpg'
  const videoFile = "https://queenscourthotel.ng/wp-content/uploads/2023/10/OPENING-1.mp4"
  return (
    <div className=' '>
      <div className='  h-[99svh]'>
      <video
        autoPlay
        loop
         muted
        className=" relative inset-0 w-full h-[99svh] object-cover "
      >
        <source src={videoFile} type="video/mp4" />
        
      </video>
        <div className="absolute w-full h-screen opacity-70 bg-black top-0"></div>
      <Nav/>

    <div  className='  absolute inset-0 flex flex-col mt-[20rem] items-center text-white'>
      <div id='text ' className=' text-[2.4rem] mb-[5rem]'>
        <h2 >Enjoy Comfort And Luxury Uncompromised</h2>
        <img src={cookie} alt="cookie" />
      </div>

      <div className=' grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-9 mx-auto w-[78%]'>
        <div className='  '>
        <h2 className=' font-bold text-[1.1rem] mb-6'>Class</h2>
        <p className=' font-medium text-[1rem]  text-[rgba(255,255,255,0.65)]'>We offer our visitors the best class in hospitality
           service from reception to their departure with 
           memoirs to treasure.</p>
           </div>
        <div className=' '>
        <h2 className=' font-bold text-[1.1rem] mb-6'>Comfort</h2>
        <p className=' font-medium text-[1rem] text-[rgba(255,255,255,0.65)]'>We go the extra distance to ensure that your stay
         is defined by a comfortable experience.</p>
           </div>
        <div className=' '>
        <h2 className=' font-bold text-[1.1rem] mb-6'>Relaxation</h2>
        <p className=' font-medium text-[1rem] text-[rgba(255,255,255,0.65)]'>Top notch relaxation facilities in our complex including lounge, bars, pool, restaurant, etc.</p>
           </div>
        <div className=' '>
        <h2 className=' font-bold text-[1.1rem] mb-6'>Customer Care</h2>
        <p className=' font-medium text-[1rem] text-[rgba(255,255,255,0.65)]'>Our team are products of top hospitality academies to offer you nothing but the best.</p>
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
