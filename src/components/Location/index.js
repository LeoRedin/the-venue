import React from "react";

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.3235866420566!2d-51.1873122335026!3d-30.057096193738175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519780471c2cf0b%3A0x9d4bfe341069cbdb!2sTeatro+AMRIGS!5e0!3m2!1sen!2sbr!4v1542742944933"
                width="100%"
                height="550px"
                frameBorder="0"
                allowFullScreen
                title="Mapa do Local"
            />

            <div className="location_tag">
                <div>Localização</div>
            </div>
        </div>
    );
};

export default Location;
