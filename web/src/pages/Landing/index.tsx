import React from "react";

import logo from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import './style.css';
import '../../assets/styles/global.css';

const Landing = () => {
  return (
        <div id="landing-page">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logo} alt="Logo"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos"
                className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="study">
                        <img src={giveClassesIcon} alt="Estudar"/>
                        Dar aulas
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas.
                    <img src={purpleHeartIcon} alt=""/>
                </span>
            </div>
        </div>
    );
};

export default Landing;
