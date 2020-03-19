import React from "react";
import '../w3.css'

const mapImg = require('../Assets/poa_map.png');

const aboutSection = (
    <div className="w3-row w3-padding-64" id="about">
        <div className="w3-col m6 w3-padding-large w3-hide-small">
            <img src={ mapImg } className="w3-round w3-image w3-opacity-min"
                 alt="Table Setting" width="600" height="500" />
        </div>

        <div className="w3-col m6 w3-padding-large">
            <h1 className="w3-center">About the POA</h1><br />
            <h5 className="w3-center">Tradition since 1994ish</h5>
            <p className="w3-large w3-text-grey w3-hide-medium">Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed
                do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>
);

const officerSection = ({officers, board}) => {
    const { president, treasurer, secretary } = officers;
    const { members } = board;
    return (
        <div className="w3-row w3-padding-64" id="officers">
            <h1 className="w3-center">Our Officers</h1><br/>
            <div className="w3-col w3-center l6 w3-padding-small">
                <h4>{ president.title }</h4>
                { president.name && <p className="w3-text-grey">{ president.name }</p>}<br/>

                <h4>{ treasurer.title }</h4>
                { treasurer.name && <p className="w3-text-grey">{ treasurer.name }</p> }<br/>

                <h4>{ secretary.title }</h4>
                {secretary.name && <p className="w3-text-grey">{ secretary.name }</p> }<br/>
            </div>

            <div className="w3-col w3-center l6 w3-padding-small">
                <h4>{ board.title }</h4>
                { members[0] && <p className="w3-text-grey">{ members[0] }</p> }<br/>

                <h4>{ board.title }</h4>
                { members[1] && <p className="w3-text-grey">{ members[1] }</p> }<br/>

                <h4>{ board.title }</h4>
                { members[2] && <p className="w3-text-grey">{ members[2] }</p> }<br/>
            </div>
        </div>
    );
};

const contactSection = (contactInfo) => (
    <div className="w3-container w3-padding-64" id="contact">
        <h1>Contact</h1><br />
        <p className="w3-text-blue-grey w3-large">
            <b>{ contactInfo.addressName }</b><br />
            <b>{ contactInfo.address }</b><br />
            <b>{ contactInfo.addressCity }, { contactInfo.addressState } { contactInfo.addressZipCode }</b><br />
            <br />
            <b>{ contactInfo.phoneNumber }</b><br />
            <b>{ contactInfo.emailAddress }</b><br />
        </p>
        <p>
            <a>If you are a current resident, then be sure to check out </a>
            <a href={ contactInfo.facebookAddress }>Cambridge Park POA</a>
            <a> on Facebook!</a>
        </p>
    </div>
);


const Content = ({content}) => {
    const { memberInfo, contactInfo } = content;
    return(
        <div className="w3-content" style={{ maxWidth: "1100px"}}>
            { aboutSection }
            <hr />
            { officerSection(memberInfo) }
            <hr />
            { contactSection(contactInfo) }
        </div>
    );
};

export default Content;
