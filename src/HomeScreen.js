import React from "react";
import "./HomeScreen.css";
import Nav from "./Nav";
function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav Bar */}
      <Nav />

      {/* Banner */}
      <Banner />
      {/* Row */}
    </div>
  );
}

export default HomeScreen;