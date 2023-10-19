import Nav from '../Components/PopupNav'

const Home = () => {

const promises =[
  


]

  const videoFile = "https://queenscourthotel.ng/wp-content/uploads/2023/10/OPENING-1.mp4"
  return (
    <div className=' bg-red'>
      <div>
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoFile} type="video/mp4" />
        
      </video>

      <Nav/>

      <div>
        <h2>Enjoy Confort And Luxury Uncompromised</h2>
      </div>

      <div>
        <div>
        <h2>Class</h2>
        <p>We offer our visitors the best class in hospitality
           service from reception to their departure with 
           memoirs to treasure.</p>
           </div>
      </div>
      </div>
      

    </div>
  )
}

export default Home
