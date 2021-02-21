import React from "react";
import Banner from "./Banner";
import "./HomeScreen.css";
import Nav from "./Nav";
import requests from "./Request";
import Row from "./Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav Bar */}
      <Nav />

      {/* Banner */}
      <Banner />
      {/* Row */}

      <Row
        title="Netflix Originals"
        fetchUrl={requests.featchNetflixOriginals}
        isLargeRow
      />
      <Row title="Top Relate" fetchUrl={requests.featchTopRelate} isLargeRow />
      <Row
        title="Actions Movie"
        fetchUrl={requests.featchActionsMovie}
        isLargeRow
      />
      <Row
        title="Comedy Movie"
        fetchUrl={requests.featchComedyMovie}
        isLargeRow
      />
      <Row
        title="Horror Movie"
        fetchUrl={requests.featchHorrorMovie}
        isLargeRow
      />
      <Row
        title="Romance Movie"
        fetchUrl={requests.featchRomanceMovie}
        isLargeRow
      />
      <Row
        title="Documentaries Movie"
        fetchUrl={requests.featchDocumentariesMovie}
        isLargeRow
      />
    </div>
  );
}

export default HomeScreen;
