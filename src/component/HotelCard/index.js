import React, { useState } from "react";
import "./hotelCard.css";

const HotelCard = props => {
  const [state, _] = useState([1, 2, 3]);
  const [graystar, updateGrayStar] = useState([1, 2]);
  const [states, updateStates] = useState([1, 2, 3, 4]);
  const [gray, updateCheck] = useState([1]);
  return (
    <div className="container">
      <main className="hotel-card">
        <section>
          <img
            src="https://images.unsplash.com/photo-1590688466449-12394418ecfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="imag-1"
            className="hero-image"
          />
        </section>
        <section className="card">
          <div>
            <article className="status">
              <h4 className="hotel-name">{props.hotelName}</h4>
              {props.id === 1 ? (
                <img
                  src="https://img.icons8.com/color/48/000000/approval--v1.png"
                  className="approval-icon"
                  alt="img-2"
                />
              ) : (
                <div></div>
              )}
            </article>
            <article className="star">
              {props.id === 1
                ? state.map(icon => <i className="fa fa-star star-yellow"></i>)
                : states.map(icon => (
                    <i className="fa fa-star star-yellow"></i>
                  ))}
              {props.id === 1
                ? graystar.map(icon => <i className="fa fa-star star-gray"></i>)
                : gray.map(icon => <i className="fa fa-star star-gray"></i>)}
            </article>
          </div>
          <article>
            <p className="range">Start From</p>
            <div className="rates">
              <p className="dollar">{props.dollar}</p>
              <p id="mode">/Night</p>
            </div>
          </article>
        </section>
        <section className="bookmark-icon">
          {props.id === 1 ? (
            <i class="fa fa-bookmark"></i>
          ) : (
            <i class="fa fa-bookmark"></i>
          )}
        </section>
      </main>
      <ul className="facility">
        <li>{props.distance} From your location</li>
        <li>{props.rooms} Room</li>
        <li>{props.facility} Facilities</li>
      </ul>
    </div>
  );
};

export default HotelCard;
