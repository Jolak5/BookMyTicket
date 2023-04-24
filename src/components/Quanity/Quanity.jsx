import { useDispatch, useSelector } from "react-redux";
import {
  addAdult,
  addChildren,
  subtractAdult,
  subtractChildren,
  totalChildren
} from "../../redux/QuantitySlice";
import "./Quantity.css";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Arrow } from "../../assets/icon";
import { useEffect } from "react";

export default function Quanity() {
  const adult = useSelector((state) => state.Quantity.adult);
  const children = useSelector((state) => state.Quantity.children);
  const totalChild = useSelector((state) => state.Quantity.totalChild);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalChildren())
  }, [dispatch])



  return (
    <div>
     
      <div className='quantity'>
      <Arrow />
        <h1>Choose your Seat Type</h1>
        <div className='choose-seat'>
          <div className='quantity-item'>
            <h2>Ticket Type</h2>
            <p>Adult Ticket</p>
            <p>Children Ticket</p>
          </div>
          <div className='quantity-item ticket-button' >
            <h2>Ticket Type</h2>
            <p>
              <button onClick={() => dispatch(subtractAdult())}>-</button>{" "}
              {adult} <button onClick={() => dispatch(addAdult())}>+</button>
            </p>
            <p>
              <button onClick={() => dispatch(subtractChildren())}>-</button>
              {children}{" "}
              <button onClick={() => {dispatch(addChildren()), dispatch(totalChildren())}}>+</button>
            </p>
          </div>
          <div className='quantity-item'>
            <h2>Amount</h2>
            <p>0</p>
            <p>{totalChild}</p>
          </div>
        </div>
        <NavLink to="seat">Continue</NavLink>
      </div>

      <Footer />
    </div>
  );
}
