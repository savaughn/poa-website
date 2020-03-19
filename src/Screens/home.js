import React from 'react';
import HeaderComponent from "../Components/Header";
import Content from "../Components/Content";
import { memberInfo } from "../Dynamics/memberInfo";
import { contactInfo } from "../Dynamics/contactInfo";
import { poaTitle } from "../Constants";

const headerImg = require('../Assets/CPPOA_header_img.jpg');

const HomeScreen = () => {
    return (
        <div>
            <HeaderComponent text={ poaTitle } headerImg={ headerImg } />
            <Content content={ { memberInfo, contactInfo } } />
        </div>
    );
};

export default HomeScreen;
