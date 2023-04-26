import { useSelector } from "react-redux";

export default function BookingHero() {
  const [eachMovie] = useSelector((state) => state.Movies.eachMovie);

  return (
    <div>
      {" "}
      <div
        className='hero'
        style={{
          backgroundImage: `url(${eachMovie.picture})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "100vh"
        }}
      >
        <div className='overlay'></div>
      </div>
      <div className='default-movie-content'>
        <button className='hollow-button'>Watch Trailer</button>
      </div>
    </div>
  );
}
