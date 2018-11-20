import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../Utils/MyButton";

class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    };

    porcentage = () => {
        const { discountStart, discountEnd } = this.state;
        if (discountStart < discountEnd) {
            this.setState({
                discountStart: discountStart + 1
            });
        }
    };

    componentDidUpdate() {
        setTimeout(() => {
            this.porcentage();
        }, 30);
    }

    render() {
        const { discountStart } = this.state;

        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade onReveal={() => this.porcentage()}>
                        <div className="discount_porcentage">
                            <span>{discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Compre antecipado!</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Sequi est quisquam labore
                                magni perspiciatis distinctio dolorum deleniti
                                ad dolore reprehenderit, laboriosam possimus
                                eveniet libero autem nemo voluptate numquam,
                                doloribus dicta.
                            </p>
                            <MyButton
                                text="Comprar ingresso"
                                bck="#ffa800"
                                color="#ffffff"
                                link="https://google.com"
                            />
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;
