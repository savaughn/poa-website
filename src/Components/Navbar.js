import React from "react";
import '../w3.css'
import { useLocation } from "react-router-dom";
import * as ROUTES from "../Constants/routes";
import Sidebar from "./Sidebar";

const homeNavBar = (
    <div className="w3-right w3-hide-small">
        <a href="#about" className="w3-bar-item w3-button">About</a>
        <a href="#officers" className="w3-bar-item w3-button">Officers</a>
        <a href="#contact" className="w3-bar-item w3-button">Contact</a>
        <a href="#login" className="w3-bar-item w3-button">Officer Login</a>
    </div>
);

const communityNavBar = (
    <div />
);

const emptyNavBar = (
    <div />
);

const rulesNavBar = (
    <div className="w3-right w3-hide-small">
        <a href="#rules" className="w3-bar-item w3-button">Rules</a>
        <a href="#dues" className="w3-bar-item w3-button">POA Dues</a>
    </div>
);

const getNavBarForScreen = ({pathname}) => {
    switch (pathname) {
        case ROUTES.HOME: return homeNavBar;
        case ROUTES.COMMUNITY: return communityNavBar;
        case ROUTES.RULES: return rulesNavBar;
        case ROUTES.PARK: return emptyNavBar;
        case ROUTES.WASTE: return emptyNavBar;
        case ROUTES.CITY: return emptyNavBar;
        default: return emptyNavBar;
    }
};


const NavBar = () => (
    <div className={"w3-top"}>
        <div className="w3-bar w3-white w3-padding w3-card">
            <a href="#home" className="w3-bar-item w3-button">Cambridge Park Property Owners Association</a>
            { getNavBarForScreen(useLocation())}
        </div>
        <br />
        <Sidebar />
    </div>
);

export default NavBar;
