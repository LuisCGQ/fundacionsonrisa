import React from "react";
import Hero from "../components/Hero";
import Information from "../components/Information";

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <Information />
      </div>
    );
  }
}

export default Home;
