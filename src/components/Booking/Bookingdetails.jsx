import { useDispatch } from "react-redux";
import { bookDate, bookLocation, bookTheatre, bookTime } from "../../redux/bookingSlice";

export default function Bookingdetails() {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
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
      <div>
        <h1>Select Data</h1>
        <input
          type='button'
          name='24/03'
          value='24/03'
          placeholder='24/03'
          onClick={(e) => dispatch(bookDate(e.target.value))}
        />
        <input
          type='button'
          value='25/03'
          onClick={(e) => dispatch(bookDate(e.target.value))}
        />
        <input
          type='button'
          value='26.03'
          onClick={(e) => dispatch(bookDate(e.target.value))}
        />
        <input type='button' value='' />
        <input type='button' value='' />
      </div>
      <div>
        <h1>Select Data</h1>
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
          <option value='VENTRUE CINEMA, IBADAN'>VENTRUE CINEMA, IBADAN</option>
        </select>
        <div>
          <h1>Select time</h1>
          <div>
            <div>
              <input type='button' value='10:00' placeholder='24/03'   onClick={(e) => dispatch(bookTime(e.target.value))}/>
              <input type='button' value='12.00'   onClick={(e) => dispatch(bookTime(e.target.value))}/>
              <input type='button' value='2.00'   onClick={(e) => dispatch(bookTime(e.target.value))}/>
              <p>AM</p>
            </div>
            <div>
              <input type='button' value='4.00'   onClick={(e) => dispatch(bookTime(e.target.value))}/>
              <input type='button' value='7.00'   onClick={(e) => dispatch(bookTime(e.target.value))}/>
              <input type='button' value='9.00'   onClick={(e) => dispatch(bookTime(e.target.value))}/>
              <p>PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
