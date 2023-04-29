import { useSelector } from "react-redux";
import { Arrow, Pen } from "../../assets/icon";
import './Confirmbooking.css'
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

export default function Comfirmbooking() {
  const [eachMovie] = useSelector((state) => state.Movies.eachMovie);

  const date = useSelector((state) => state.Booking.date);
  const theatre = useSelector((state) => state.Booking.theatre);
  const time = useSelector((state) => state.Booking.time);

  // Get the number of adults and children tickets
  const quantityAdult = useSelector((state) => state.Quantity.adult);
  const quantityChildren = useSelector((state) => state.Quantity.children);

  return (
    <div>
      <div className="go-back-div">
      <Arrow />
      <h1>Confirm Booking</h1>
      </div>
      <div
        className='hero'
        style={{
          backgroundImage: `url(${eachMovie.picture})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "100vh"
        }}
      ></div>
      <div className="title-div">
        <h1>{eachMovie.title}</h1>
        <div> <h5>Action</h5> <hr /> <h5>PG15</h5></div>
        <p>Action | PG15 </p>

      </div>
      

      <section className='filled-information'>
      <div className="edit-pen"><Pen /></div>
        <div>
          <p>Theatre:</p>
          <p>{theatre}</p>{" "}
        </div> <hr />
        <div>
          <p>Date:</p>
          <p>{date}</p>{" "}
        </div> <hr />
        <div>
          <p>Time:</p>
          <p>{time}</p>
        </div> <hr />
        <div>
          <p>Quantity:</p>
          <p>
            {quantityAdult} Adults, {quantityChildren} Children
          </p>
        </div>
        <hr />
      </section>
      <section className='snacks'>
        {/* <div>
          <button>Drinks</button> <button>Snacks</button>
        </div> */}
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
        <div>
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
          <img src='' alt='' />
        </div>
      </section>
      <section className="ticket-table">
        <table>
            <thead>
                <th>Items</th>
                <th>Amount</th>
            </thead>
            <tbody>
                <tr><td>Movie Ticket</td> <td>Snacks</td></tr>
                <tr><td>Snacks</td> <td>Snacks</td></tr>
                <tr><td>Drinks</td> <td>Snacks</td></tr>
                <tr><td>Total</td> <td>Snacks</td></tr>
                
            </tbody>
        </table>
      </section>
      <div className="continue-container"> <NavLink className="continue-button" to={`payment`}>Proceed to Payment</NavLink></div>

      <Footer />
    </div>
  );
}
