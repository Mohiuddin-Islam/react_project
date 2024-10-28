import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/Joy.jpeg";
import ava02 from "../../assets/all-images/Rakib.jpeg";
import ava03 from "../../assets/all-images/Abir.jpeg";
import ava04 from "../../assets/all-images/Nazrul.jpeg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
        We had a rental car in Mauritius for 1 week. Perfect service, hotel delivery (Intercontinental Hotel) and pick-up, everything went perfectly. Good instructions for the rental car and helpful tips for the Cox's-Bazar. I would rent a car again at any time. Greets to the friendly staff.  Professional and very helpful car rental.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Najmul Joy</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        I arranged the transfer from Mauritius Airport to my accommodation and from the accommodation back to the airport, as well as renting a car for 3 weeks through Maki. Everything was 100% satisfactory. For the transfer, you're informed a day in advance where the driver will be waiting for you. 
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Mahmudul Rakib</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        We rented a small car for 3 days. Everything worked out wonderfully. The car was brought to us at the hotel. Handover was super punctual, everything was explained properly. Telephone number exchanged so that we can be contacted straight away if there are any problems. So we were very satisfied.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Abir Hossain</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
        Maki passed us on to TRAVEL POINT TOUR... as an intermediary. Car was a Toyota Hilux DoubleCab, 43000km. The car is simply great. Rental on time at the hotel, return 15 minutes late with WA announcement!!! at the hotel. Contrary to some bad statements, a very good experience with Maki and the actual car rental.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Nazrul Islam</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
