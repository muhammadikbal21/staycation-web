import React, { Component } from "react";
import Header from "parts/Header";
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import landingPage from 'json/landingPage.json'
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {

  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef() // memberi arah dengan scroll otomatis ketika button show me di klik
  }

  componentDidMount() {
    window.title = "Staycation | Home"
    window.scrollTo(0, 0)
  }

  render() {
    console.log("ini props landing page", this.props);
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
