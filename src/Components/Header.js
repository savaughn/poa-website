import React from "react";
import '../w3.css'

const HeaderComponent = ({ text, headerImg }) => {
    return(
        <header className="w3-display-container w3-content w3-wide" id="home">
            { headerImg && <img className="w3-image" src={ headerImg } alt={ text } width="1600" height="800" /> }
                <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                    { text && <h1 className="w3-xxlarge w3-aqua">{ text }</h1> }
                </div>
        </header>
    );
};

export default HeaderComponent;
