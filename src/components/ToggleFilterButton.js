import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './toggle-filter-button.css';

import shopeeButton from '../images/shopeeButton.svg';
import shopeeEmptyButton from '../images/shopeeEmpty.svg';

function ToggleFilterButton() { // param: width, text

    const [border, setBorder] = React.useState(true);

    const toggleBorder = () => {
        setBorder(!border);
    }
    return (
        <div>


            <div onClick={() => toggleBorder()} style={{ width: '25%' }}>
                {!border ? (
                        <div class="container" style={{ width: '100%' }}>
                        <img src={shopeeEmptyButton} alt="Snow" style={{ width: '100%' }} width="250" height="100" />
                        <div className="centered">Price</div> 
                    </div>
                ) : (
                        <div class="container">
                            <img src={shopeeButton} alt="Snow" style={{ width: '100%' }} width="250" height="100"/>
                            <div className="centered">Price</div>
                        </div>
                    )}
            </div>

        </div>
    );
}
export default ToggleFilterButton;