import React, { Component } from "react";
import Slide from "react-reveal/Slide";

class TimeUntil extends Component {
    state = {
        deadline: "Dec, 25, 2018",
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0"
    };

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time < 0) {
            console.log("damn bro");
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));

            this.setState({
                days,
                hours,
                minutes,
                seconds
            });
        }
    }

    componentDidMount() {
        const { deadline } = this.state;
        setInterval(() => this.getTimeUntil(deadline), 1000);
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">Evento começa em</div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">{days}</div>
                            <div className="countdown_tag">dias</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{hours}</div>
                            <div className="countdown_tag">horas</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{minutes}</div>
                            <div className="countdown_tag">minutos</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{seconds}</div>
                            <div className="countdown_tag">segundos</div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default TimeUntil;
