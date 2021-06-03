import React from 'react';
import './Slider.css'


function Slider () {
    return(
        <div className="containerS">
        <div className="slider">
            <div className="slides">
                <input type="radio" name="radio-btn" id="radio1"></input>
                <input type="radio" name="radio-btn" id="radio2"></input>
                <input type="radio" name="radio-btn" id="radio3"></input>
                <input type="radio" name="radio-btn" id="radio4"></input>

                <div className="slide first">
                    <img src="../../../images/APC_0012.jpg" width ="120" height="90" alt="fish"></img>

                </div>
                <div className="slide">
                <img src="../../../images/IMG_4435.png" alt="scallops"></img>

                </div>
                <div className="slide">
                <img src="../../../images/APC_0212.jpg" alt=""></img>

                </div>
                <div className="slide">
                <img src="../../../images/APC_0212.jpg" alt=""></img>

                </div>



                {/*auto nav  */}
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
            </div>
        {/*manua nav  */}
        <div className="navigation-manual">
            <label for="radio1" className="manual-btn"></label>
            <label for="radio2" className="manual-btn"></label>
            <label for="radio3" className="manual-btn"></label>
            <label for="radio4" className="manual-btn"></label>
        </div>

        </div>
        </div>
    )

}
export default Slider