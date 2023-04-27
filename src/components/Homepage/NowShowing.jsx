import { useDispatch, useSelector } from "react-redux";
import "./Nowshowing.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { renderEachMovie } from "../../redux/homepageSlice";

export default function NowShowing() {
  const [state, setState] = useState(6);
  const movielist = useSelector((state) => state.Movies.movieList);
  const slicedList = movielist.slice(0, state);
  const dispatch = useDispatch();

  return (
    <div className='now-showing'>
      <h1>Now Showing</h1>
      <div className='map-showing'>
        {slicedList.map((movie, index) => (
          <div className='each-movie-showing' key={index}>
            <NavLink
              to={`/home/${movie.title}`}
              onClick={() => {
                dispatch(renderEachMovie(movie.ids));
              }}
            >
              <img src={movie.picture} alt='Movie poster' />
              <h1>
                {movie.title} | <span>{movie.ratings}</span>
              </h1>
            </NavLink>
          </div>
        ))}
      </div>
      <div className="show-more-button-div">
        <button
          className='hollow-button btn-now-showing'
          onClick={() => setState(state + 6)}
        >
          View More
        </button>
      </div>
    </div>
  );
}
