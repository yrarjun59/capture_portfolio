import React from 'react'

//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

function ServicesSection() {
  return (
    <div className='services'>
        <div className="description">
            <h2>High <span>quality</span>Services</h2>
            <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img src={clock} alt="clock"/>
                        <h3>Efficient</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <div className="card">
                    <div className="icon">
                        <img src={diaphragm} alt="diapharm"/>
                        <h3>Diapharam</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                {/*  */}
                <div className="card">
                    <div className="icon">
                        <img src={money} alt="money"/>
                        <h3>Affordable</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                {/*  */}
                <div className="card">
                    <div className="icon">
                        <img src={teamwork} alt="team"/>
                        <h3>Together</h3>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
        <div className="image">
            <img src={home2} alt="home"/>
        </div>
    </div>
  )
}


export default ServicesSection;