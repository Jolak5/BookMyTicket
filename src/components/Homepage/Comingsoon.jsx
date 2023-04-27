import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import './comingsoon.css'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { renderEachMovie } from '../../redux/homepageSlice';
// import { useState } from 'react';

export default function Comingsoon() {
  // const [state, setState] = useState(6);
  const movielist = useSelector((state) => state.Movies.movieList);
  const slicedList = movielist.slice(0, 20);
  const dispatch = useDispatch()
  return (
    <div className='container'>
      <h1>Coming Soon</h1>
    <Swiper
      className='swiper_container'
      effect={"coverflow"}
      // grabCursor={true}
      centeredSlides={true}
      loop={true}
      spaceBetween={50}
      slidesPerView={6}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1.5
      }}
      pagination={{ el: ".swiper-pagination", clickable: true, Virtual }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true
      }}
      autoplay={true}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
    >
      {slicedList.map((movie, index) => (
        <SwiperSlide key={index} id={index} virtual>
          <NavLink
              to={`/home/${movie.title}`}
              onClick={() => {
                dispatch(renderEachMovie(movie.ids));
              }}
            >
          <img src={movie.picture} alt='Movie poster' />
          <div>
          <p>
            {movie.title} | <span>{movie.ratings}</span>
          </p>
          </div>
          </NavLink>
        </SwiperSlide>
      ))}
      <div className='slider-controler'>
        <div className='swiper-button-prev slider-arrow'>
        <ion-icon name='arrow-back-outline'></ion-icon>
      </div>
      <div className='swiper-button-next slider-arrow'>
        <ion-icon name='arrow-forward-outline'></ion-icon>
      </div>
        <div className='swiper-pagination'></div>
      </div>
    </Swiper>
    </div>
  );
}
