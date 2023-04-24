import { useSelector } from "react-redux"

export default function BookingHero() {
    const[ eachMovie ]= useSelector((state) => state.Movies.eachMovie)
   
    return (
    <div> <div
    className='hero'
    style={{
      backgroundImage: `url(${eachMovie.picture})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      height: "100vh"
    }}
  >
    <div className='default-movie-content'>
      <h1>{eachMovie.title}</h1>
      <p>
        {eachMovie.genre} | {eachMovie.runtimes} |{" "}
        {eachMovie.ratings}
      </p>
      <button className='hollow-button'>Watch Trailer</button>
      <button className='fill-button'>Book Now</button>
    </div>
    <div className='overlay'></div>
  </div> </div>
  )
}
