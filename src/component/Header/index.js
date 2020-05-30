import React from "react";
import "./header.css";

export const Header = props => {
  return (
    <div className="homepage-header">
      <header className="header">
        <article className="ham-bar">
          <div className="hamburger">
            <div id="ham-1"></div>
          </div>
          <div className="hamburger">
            <div></div>
          </div>
          <div className="hamburger">
            <div id="ham-3"></div>
          </div>
        </article>
        <article>
          <i className="fa fa-bell bell-icon"></i>
        </article>
      </header>
      <nav className="navbar">
        <a href="/acc">
          <span className="selected"></span>Accommodation
        </a>
        <a href="/flights">Flights</a>
        <a href="/trains">Trains</a>
      </nav>
      <section className="heading">
        <h4 className="title">Hi {props.title},</h4>
        <h4 className="title">Where do you want to stay?</h4>
      </section>
      <section>
        <article className="destination">
          <i className="fa fa-map-marker map"></i>
          <p className="text">Your Destination</p>
        </article>
      </section>
    </div>
  );
};

export const Topbar = () => {
  return (
    <main className="top-bar">
      <section>
        <h4 className="top-bar--text">Near You</h4>
        <p className="results">12 Hotel Found</p>
      </section>
      <section>
        <p className="more">MORE</p>
      </section>
    </main>
  );
};
