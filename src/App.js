import React from "react";
import "./App.css";
import { Header, Topbar } from "./component/Header";
import HotelCard from "./component/HotelCard";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header title="Wildan" />
      <Topbar />
      <div className="App">
        <HotelCard dollar="$60" hotelName="The Rose Hotel" id={1} rooms={2} facility={10} distance="10m"/>
        <HotelCard dollar="$145" hotelName="Tretes Raya Hotel" id={2} rooms={2} facility={13} distance="2KM"/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
