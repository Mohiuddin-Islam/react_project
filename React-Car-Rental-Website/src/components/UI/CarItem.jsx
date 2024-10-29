import axios from "axios"
import { useEffect, useState } from "react";

import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {
  //const { imgUrl, model, carName, automatic, speed, price } = props.item;
  const { carName} = props.item;
  const [users, setUsers] = useState([]);
  useEffect(() => {
      getUsers();
  }, []);
  function getUsers() {
      axios.get('http://localhost/React-Car-Rental-Website/admin/vehicle_list.php').then(function(response) {
          console.log(response.data);
          setUsers(response.data);
      });
  }
  return (
    <>
    <Col lg="4" md="4" sm="6" className="mb-5">
      {users.map((user, key) =>
      <div className="car__item" key={key}>
        <div className="car__img">
          <img src={`http://localhost/React-Car-Rental-Website/admin/vend/img/${user.v_dpic}`} alt="img" className="w-100"/>
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{user.v_name}</h4>
          <h6 className="rent__price text-center mt-">
          ৳{user.v_price}.00 <span>/ Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {user.v_category}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-settings-2-line"></i> {user.v_reg_no}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {user.v_pass_no}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Rent</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
      )}
    </Col>
    </>
  );
};

export default CarItem;
