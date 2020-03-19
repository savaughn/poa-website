import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../Constants/routes';
import HomeScreen from "../../Screens/home";
import RulesScreen from "../../Screens/rules";
import CommunityScreen from "../../Screens/community";
import ParkScreen from "../../Screens/park";
import WasteScreen from "../../Screens/waste";
import CityScreen from "../../Screens/city";
import NavBar from "../Navbar";

const Navigation = () => (
        <Router>
            <NavBar />
            <Route exact path={ROUTES.HOME} component={ HomeScreen } />
            <Route path={ROUTES.RULES} component={ RulesScreen } />
            <Route path={ROUTES.COMMUNITY} component={ CommunityScreen } />
            <Route path={ROUTES.PARK} component={ ParkScreen } />
            <Route path={ROUTES.WASTE} component={ WasteScreen } />
            <Route path={ROUTES.CITY} component={ CityScreen } />
        </Router>
);
export default Navigation;
