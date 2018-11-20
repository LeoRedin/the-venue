import React, { Component } from "react";
import MyButton from "../Utils/MyButton";

import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
    state = {
        prices: [100, 150, 300],
        positions: ["Chulé", "Pista", "Top"],
        desc: [
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed esse earum magni voluptatem saepe in vitae nemo qui aperiam, aspernatur non facilis corporis nisi sint ea doloremque reiciendis consectetur.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed esse earum magni voluptatem saepe in vitae nemo qui aperiam, aspernatur non facilis corporis nisi sint ea doloremque reiciendis consectetur.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sed esse earum magni voluptatem saepe in vitae nemo qui aperiam, aspernatur non facilis corporis nisi sint ea doloremque reiciendis consectetur."
        ],
        linkTo: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com"
        ],
        delay: [500, 0, 500]
    };

    showBoxes = () =>
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>R${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                link={this.state.linkTo[i]}
                                text="Comprar ingresso"
                                bck="#ffa800"
                                color="#ffffff"
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ));

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Preços</h2>

                    <div className="pricing_wrapper">{this.showBoxes()}</div>
                </div>
            </div>
        );
    }
}

export default Pricing;
