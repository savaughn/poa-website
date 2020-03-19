import React from 'react';
import { contactInfo } from "../Dynamics/contactInfo";
import { duesInfo } from "../Dynamics/duesInfo";

const rules = (
    <div className="w3-row w3-padding-64" id="rules">
        <h1 className="w3-center">Commonly Violated CC&Rs:</h1>
        <div className="w3-row w3-center l6 w3-padding-small">
            <h4> #10 Trash Cans</h4>
            <p className="w3-text-grey">Trash cans must be stored out of sight from the street.</p><br />

            <h4>#15 Boats, trailers, etc.
            </h4>
            <p className="w3-text-grey">These must be stored out of sight from the street.</p><br />
            <h4> #11 No parking on the grass</h4>
            <p className="w3-text-grey">Per Rogers city ordinance
                do not block the sidewalks</p><br />
            <h4> CC& R Cooperation Patrols are conducted
                monthly by Safe Haven.</h4>
        </div>
    </div>
);

const dues = (
    <div className="w3-row w3-padding-64" id="dues">
        <br />
        <br />
        <h1 className="w3-center">POA Dues<br />
        </h1><br />
        <div className="w3-row w3-center l6 w3-padding-small">
            <h4> The POA annual fee is ${ duesInfo.dueAmt } due on { duesInfo.dueDate }.</h4>
            <p className="w3-text-grey">A late fee will be assessed, if paid after { duesInfo.lateDate }.</p>
            <p className="w3-text-grey">Note that if you recently moved in after { duesInfo.dueDate }, then you do not need to pay until the next annual collection date.</p><br />

            <h4>Methods of payment</h4>
            <p className="w3-text-grey">Online payment via email invoice</p>
            <p className="w3-text-grey">By personal check or money order to:</p>
            <b>{ contactInfo.addressName }</b><br />
            <b>{ contactInfo.address }</b><br />
            <b>{ contactInfo.addressCity}, { contactInfo.addressState } { contactInfo.addressZipCode }</b><br /><br />
            <h1 className="w3-center">Please, be the neighbor you wanted when you moved
                into this neighborhood.
            </h1><br />
        </div>
    </div>
);

const RulesScreen = () => {
    return (
        <div>
            { rules }
            { dues }
        </div>
    );
};

export default RulesScreen;
