import { useSelector } from "react-redux";
import "./Homepage.css";
import Quickbooking from "./Quickbooking";
import NowShowing from "./NowShowing";
// import Comingsoon from "./Comingsoon";
import Footer from "../Footer/footer";


export default function Homepage() {
  const latestMovie = useSelector((state) => state.Movies.latestmovie);

  return (
    <div>
      <div
        className='hero'
        style={{
          backgroundImage: `url(${latestMovie.picture})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "100vh"
        }}
      >
        <div className='default-movie-content'>
          <h1>{latestMovie.title}</h1>
          <p>
            {latestMovie.genre} | {latestMovie.runtimes} |{" "}
            {latestMovie.ratings}
          </p>
          <button className='hollow-button'>Watch Trailer</button>
          <button className='fill-button'>Book Now</button>
        </div>
        <div className='overlay'></div>
      </div>
      <Quickbooking />
      <NowShowing />
      {/* <Comingsoon /> */}
      
      <Footer />
    </div>
  );
}