import { useSelector } from "react-redux";
import { Arrow, Pen } from "../../assets/icon";
import Footer from "../Footer/footer";
import './Confirmbooking.css'

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
      <Arrow />
      <h1>Confirm Booking</h1>
      <div
        className='hero'
        style={{
          backgroundImage: `url(${eachMovie.picture})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "100vh"
        }}
      ></div>
      <div>
        <h1>{eachMovie.title}</h1>
      </div>
      <Pen />

      <section className='filled-information'>
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
        <div>
          <button>Drinks</button> <button>Snacks</button>
        </div>
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
                <tr><td>Movie Ticket</td> <td>Snacks</td></tr>
                <tr><td>Movie Ticket</td> <td>Snacks</td></tr>
                <tr><td>Movie Ticket</td> <td>Snacks</td></tr>
                
            </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
}
