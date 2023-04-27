import { useDispatch, useSelector } from "react-redux";
import {
  addAdult,
  addChildren,
  subtractAdult,
  subtractChildren,
  totalAdultCount,
  totalChildren
} from "../../redux/QuantitySlice";
import "./Quantity.css";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/footer";
import { Arrow } from "../../assets/icon";
import { useEffect } from "react";

export default function Quanity() {
  const adult = useSelector((state) => state.Quantity.adult);
  const children = useSelector((state) => state.Quantity.children);
  const totalChild = useSelector((state) => state.Quantity.totalChild);
  const totalAdult = useSelector((state) => state.Quantity.totalAdult);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalChildren());
  }, [dispatch]);

  return (
    <div>
      <div className='quantity'>
      <div className="go-back-div">
      <Arrow />
      <h1>Choose your Seat Type</h1>
      </div>
    
        <div className='choose-seat'>
          <div className='quantity-item'>
            <h2>Ticket Type</h2>
            <p>Adult Ticket</p>
            <p>Children Ticket</p>
          </div>
          <div className='quantity-item ticket-button'>
            <h2>Ticket Type</h2>
            {/* buttons to control the number of adults tickets */}
            <p>
              <button onClick={() => {dispatch(subtractAdult()), dispatch(totalAdultCount())}}>-</button>{" "}
              {adult} <button onClick={() => {dispatch(addAdult()), dispatch(totalAdultCount())}}>+</button>
            </p>
            {/* adults buttons to count the number of adult child.  */}
            <p>
              <button onClick={() =>{ dispatch(subtractChildren()), dispatch(totalChildren())}}>-</button>
              {children}{" "}
              <button
                onClick={() => {
                  dispatch(addChildren()), dispatch(totalChildren());
                }}
              >
                +
              </button>
            </p>
          </div>
          <div className='quantity-item'>
            <h2>Amount</h2>
            <p>{totalAdult}</p>
            <p>{totalChild}</p>
          </div>
        </div>
        <div className='continue-container'>
          {" "}
          <NavLink className='continue-button' to={`seat`}>
            Continue
          </NavLink>
        </div>
      </div>

      <Footer />
    </div>
  );
}
