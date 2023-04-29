import { useDispatch } from "react-redux";
import {
  bookDate,
  bookLocation,
  bookTheatre,
  bookTime
} from "../../redux/bookingSlice";
import { useSelector } from "react-redux";
import "./Booking.css";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

export default function Bookingdetails() {
  const [eachMovie] = useSelector((state) => state.Movies.eachMovie);

  const dispatch = useDispatch();

  const [movieTitle, setMovieTitle] = useState(`${eachMovie.title}`);
  const [movieSummary, setMovieSummary] = useState(`${eachMovie.summary}`);
  const [movieRuntime, setMovieRuntime] = useState(`${eachMovie.runtimes}`);

  useEffect(() => {
    const title = window.localStorage.getItem("EACH_MOVIE_TITLE");
    setMovieTitle(title);
    const summary = window.localStorage.getItem("EACH_MOVIE_SUMMARY");
    setMovieSummary(JSON.parse(summary));
    const runtime = window.localStorage.getItem("EACH_MOVIE_RUNTIME");
    setMovieRuntime(JSON.parse(runtime));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "EACH_MOVIE_TITLE",
      JSON.stringify(`${eachMovie.title}`)
    );
    window.localStorage.setItem(
      "EACH_MOVIE_SUMMARY",
      JSON.stringify(`${eachMovie.summary}`)
    );
    window.localStorage.setItem(
      "EACH_MOVIE_RUNTIME",
      JSON.stringify(`${eachMovie.runtimes}`)
    );
  }, [eachMovie.summary, eachMovie.title, eachMovie.runtimes]);
  return (
    <div>
      <div className='movie-content'>
        <div>
          {" "}
          <h1>{movieTitle}</h1>
          {eachMovie.genre}
        </div>
        <hr />
        <div>
          <p>Synopsis</p>
          {`${movieSummary}`}{" "}
        </div>
        <hr />

        <div>
          {" "}
          <h2>Cast & Crew</h2>
          <p>Director: </p>
          <p>| {movieRuntime} |</p>
        </div>
      </div>
      <Form  action='BookNow'>
        <div className='location'>
          <>Location</>
          <select
            name=''
            id=''
            onChange={(e) => dispatch(bookLocation(e.target.value))}
            required
          >
            <option value='City'>City</option>
            <option value='Abuja'>Abuja</option>
            <option value='Ibadan'>Ibadan</option>
          </select>
        </div>
        <hr />
        <div className='select-date'>
          <h1>Select Date</h1>
          <div className='select'>
            <input
              className='input-date'
              type='button'
              name='24/03'
              value='24/03'
              placeholder='24/03'
              onClick={(e) => dispatch(bookDate(e.target.value))}
              required
            />
            <hr />
            <input
              className='input-date'
              type='button'
              value='25/03'
              onClick={(e) => dispatch(bookDate(e.target.value))}
              required
            />
            <hr />

            <input
              className='input-date'
              type='button'
              value='26.03'
              onClick={(e) => dispatch(bookDate(e.target.value))}
            />
            <hr />

            <input
              className='input-date'
              type='button'
              value='26.03'
              required
              onClick={(e) => dispatch(bookDate(e.target.value))}
            />
            <hr />

            <input
              type='button'
              value='26.03'
              onClick={(e) => dispatch(bookDate(e.target.value))}
            />
          </div>
        </div>
        <div className='select-theatre'>
          <h1>Theatre</h1>
          <div className='theatre'>
            <select
              name=''
              id=''
              onChange={(e) => dispatch(bookTheatre(e.target.value))}
              required
            >
              <option value='FILM HOUSE CINEMA NEAR LANDMARK CENTER'>
                FILM HOUSE CINEMA NEAR LANDMARK CENTER
              </option>
              <option value='GENESIS DELUXE MAROKO, LAGOS'>
                GENESIS DELUXE MAROKO, LAGOS
              </option>
              <option value='VENTRUE CINEMA, IBADAN'>
                VENTRUE CINEMA, IBADAN
              </option>
            </select>
          </div>
          <div className='select-time'>
            <h1>Select time</h1>
            <div className='time'>
              <div className='clock'>
                <input
                  type='button'
                  value='10:00'
                  required
                  placeholder='24/03'
                  onClick={(e) => dispatch(bookTime(e.target.value))}
                />
                <input
                  type='button'
                  value='12.00'
                  required
                  onClick={(e) => dispatch(bookTime(e.target.value))}
                />
                <input
                  type='button'
                  value='2.00'
                  required
                  onClick={(e) => dispatch(bookTime(e.target.value))}
                />
                <p>AM</p>
              </div>
              <div className='clock'>
                <input
                  type='button'
                  value='4.00'
                  onClick={(e) => dispatch(bookTime(e.target.value))}
                  required
                />
                <input
                  type='button'
                  value='7.00'
                  onClick={(e) => dispatch(bookTime(e.target.value))}
                />
                <input
                name="time"
                  type='button'
                  value='9.00'
                  required
                  onClick={(e) => dispatch(bookTime(e.target.value))}
                />
                <p>PM</p>
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Continue</button>
      </Form>
    </div>
  );
}
