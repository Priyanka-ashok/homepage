import React from "react";
import "./hotelCard.css";

const HotelCard = props => {
  return (
    <div>
      <main className="hotel-card">
        <section>
          <img
            src="https://images.unsplash.com/photo-1590688466449-12394418ecfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt="imag-1"
            className="hero-image"
          />
        </section>
        <section className="card">
          <article className="hey">
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
          <article className="rates">
            <p className="range">Start From</p>
            <p className="dollar">{props.dollar}</p>
          </article>
        </section>
        <section>
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

{
  /* <img src="https://img.icons8.com/color/48/000000/filled-star.png"/> */
}
