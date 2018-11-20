import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/Featured";
import VenueInfo from "./components/VenueInfo";
import Highlight from "./components/Highlights";
import Pricing from "./components/Pricing";
import Location from "./components/Location";
import Footer from "./components/header_footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Element name="starts">
                    <Header />
                </Element>

                <Featured />

                <Element name="infos">
                    <VenueInfo />
                </Element>

                <Element name="highlights">
                    <Highlight />
                </Element>

                <Element name="preco">
                    <Pricing />
                </Element>

                <Element name="local">
                    <Location />
                </Element>

                <Footer />
            </div>
        );
    }
}

export default App;
