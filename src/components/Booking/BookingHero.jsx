import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function BookingHero() {
  const [eachMovie] = useSelector((state) => state.Movies.eachMovie);
  const [moviePicture, setMoviePicture] = useState(`${eachMovie.picture}`)
  useEffect(() => {
   const picture =  window.localStorage.getItem('EACH_MOVIE_PICTURE')
   setMoviePicture(JSON.parse(picture))
  }, [])

useEffect(() => {
  window.localStorage.setItem('EACH_MOVIE_PICTURE', JSON.stringify(`${eachMovie.picture}`))
})
  return (
    
    <div className=' booking-hero'>
      {" "}
      <div
        className='hero'
        style={{
          backgroundImage: `url(${moviePicture})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "100vh"
        }}
      >
        <div className='overlay'></div>
      </div>
      <div className='default-movie-content booking-watch-trailer-btn'>
        <button className='hollow-button '>
          Watch Trailer
        </button>
      </div>
    </div>
  );
}
