import { useDispatch } from "react-redux";
import {
  bookDate,
  bookLocation,
  bookTheatre,
  bookTime
} from "../../redux/bookingSlice";
import { useSelector } from "react-redux";
import "./Booking.css";

export default function Bookingdetails() {
  const dispatch = useDispatch();
  const [eachMovie] = useSelector((state) => state.Movies.eachMovie);

  return (
    <div>
      <div className='movie-content'>
        <div>
          {" "}
          <h1>{eachMovie.title}</h1>
          {eachMovie.genre}
        </div>
        <hr />
        <div>
          <p>Synopsis</p>
          {`${eachMovie.summary}`}{" "}
        </div>
        <hr />

        <div>
          {" "}
          <h2>Cast & Crew</h2>
          <p>Director: </p>
          <p>| {eachMovie.runtimes} |</p>
        </div>
      </div>
      <div className='location'>
        <h1>Location</h1>
        <select
          name=''
          id=''
          onChange={(e) => dispatch(bookLocation(e.target.value))}
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
            type='button'
            name='24/03'
            value='24/03'
            placeholder='24/03'
            onClick={(e) => dispatch(bookDate(e.target.value))}
          />
          <hr />
          <input
            type='button'
            value='25/03'
            onClick={(e) => dispatch(bookDate(e.target.value))}
          />
          <hr />

          <input
            type='button'
            value='26.03'
            onClick={(e) => dispatch(bookDate(e.target.value))}
          />
          <hr />

          <input
            type='button'
            value='26.03'
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
        <div className="select-time">
          <h1>Select time</h1>
          <div className="time">
            <div className="clock">
              <input
                type='button'
                value='10:00'
                placeholder='24/03'
                onClick={(e) => dispatch(bookTime(e.target.value))}
              />
              <input
                type='button'
                value='12.00'
                onClick={(e) => dispatch(bookTime(e.target.value))}
              />
              <input
                type='button'
                value='2.00'
                onClick={(e) => dispatch(bookTime(e.target.value))}
              />
              <p>AM</p>
            </div>
            <div className="clock">
              <input
                type='button'
                value='4.00'
                onClick={(e) => dispatch(bookTime(e.target.value))}
              />
              <input
                type='button'
                value='7.00'
                onClick={(e) => dispatch(bookTime(e.target.value))}
              />
              <input
                type='button'
                value='9.00'
                onClick={(e) => dispatch(bookTime(e.target.value))}
              />
              <p>PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
