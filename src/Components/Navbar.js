import React from "react";
import '../w3.css'
import { Link, useLocation } from "react-router-dom";
import * as ROUTES from "../Constants/routes";
import Sidebar from "./Sidebar";

const homeNavBar = (
    <div className="w3-bar w3-white w3-padding w3-card">
        <a href="#home" className="w3-bar-item w3-button">Cambridge Park Property Owners Association</a>
        <div className="w3-right w3-hide-small">
            <a href="#about" className="w3-bar-item w3-button">About</a>
            <a href="#officers" className="w3-bar-item w3-button">Officers</a>
            <a href="#contact" className="w3-bar-item w3-button">Contact</a>
            <Link to={ ROUTES.ADMIN } className="w3-bar-item w3-button">Officer Login</Link>
        </div>
    </div>
);

const communityNavBar = (
    <div className="w3-bar w3-white w3-padding w3-card">
        <Link to={ ROUTES.HOME } className="w3-bar-item w3-button">Cambridge Park Property Owners Association</Link>
    </div>
);

const emptyNavBar = (
    <div className="w3-bar w3-white w3-padding w3-card">
        <Link to={ ROUTES.HOME } className="w3-bar-item w3-button">Cambridge Park Property Owners Association</Link>
    </div>
);

const rulesNavBar = (
    <div className="w3-bar w3-white w3-padding w3-card">
        <Link to={ ROUTES.HOME } className="w3-bar-item w3-button">Cambridge Park Property Owners Association</Link>
        <div className="w3-right w3-hide-small">
            <a href="#rules" className="w3-bar-item w3-button">Rules</a>
            <a href="#dues" className="w3-bar-item w3-button">POA Dues</a>
        </div>
    </div>
);

const adminNavBar = (
    <div className="w3-bar w3-white w3-padding w3-card">
        <Link to={ ROUTES.HOME } className="w3-bar-item w3-button">Cambridge Park Property Owners Association</Link>
        <div className="w3-right w3-hide-small">
            <Link to={ ROUTES.HOME } className="w3-bar-item w3-button">Log out</Link>
        </div>
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
        case ROUTES.ADMIN: return adminNavBar;
        default: return emptyNavBar;
    }
};


const NavBar = () => (
    <div className={"w3-top"}>
        { getNavBarForScreen(useLocation())}
        <br />
        <Sidebar />
    </div>
);

export default NavBar;
