import { useDispatch, useSelector } from "react-redux";
import "./Homepage.css";
import Quickbooking from "./Quickbooking";
import NowShowing from "./NowShowing";
import Comingsoon from "./Comingsoon";
import Footer from '../Footer/Footer'
import { NavLink } from "react-router-dom";
import { renderEachMovie } from "../../redux/homepageSlice";
// import Comingsoon from "./Comingsoon";
import 'hover.css/css/hover-min.css';


export default function Homepage() {
  const latestMovie = useSelector((state) => state.Movies.latestmovie);
  const dispatch = useDispatch();

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
          <NavLink
              to={`/home/${latestMovie.title}`}
              onClick={() => {
                dispatch(renderEachMovie(latestMovie.ids));
              }}
            ><button className='hover-shadow fill-button'>Book Now</button></NavLink>
        </div>
        <div className='overlay'></div>
      </div>
      
      <Quickbooking />
      <NowShowing />
      <Comingsoon />
      
      <Footer />
    </div>
  );
}
