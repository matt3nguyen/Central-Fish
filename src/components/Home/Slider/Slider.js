import React, {useState} from 'react';
import './Slider.css'
import Bcrab from '../../../images/APC_0124-2.jpg'
import fish from '../../../images/APC_0212.jpg'
import crableg from '../../../images/APC_0317.jpg'
import scallop from '../../../images/IMG_4437.jpg'

class Slider extends React.Component {
    componentDidMount() {
        var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.buttn');
    let currentSlide = 1;

    var manualNav = function(manual) {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        })

        btns.forEach((buttn) => {
                buttn.classList.remove('active');
             })
        
        slides[manual].classList.add('active');
        btns[manual].classList.add('active');
    }
    btns.forEach((buttn, i) => {
    buttn.addEventListener("click", () => {
            manualNav(i);
            currentSlide = i;
        });
    }); 


    ///auto
        var repeat = function(activeClass){
        let active = document.getElementsByClassName('active');
        let i = 1;
  
        var repeater = () => {
          setTimeout(function(){
            [...active].forEach((activeSlide) => {
              activeSlide.classList.remove('active');
            });
  
          slides[i].classList.add('active');
          btns[i].classList.add('active');
          i++;
  
          if(slides.length == i){
            i = 0;
          }
          if(i >= slides.length){
            return;
          }
          repeater();
        }, 10000);
        }
        repeater();
      }
      repeat();
    }

    render() {
    
    // auto

    




    
    return(
        <body className="containerS">
            <div className="slider">

                <div className="slide active ">
                    <img src={Bcrab}  alt="fish"></img>

                </div>
                <div className="slide ">
                <img src={fish}   alt="fish"></img>

                </div>
                <div className="slide ">
                <img src={crableg}    alt="crableg"></img>

                </div>
                <div className="slide ">
                <img src={scallop} alt="scallop"></img>

                </div>

                {/*button */}
                <div className="navigation">
                    <div className="buttn active "></div>
                    <div className="buttn"></div>
                    <div className="buttn"></div>
                    <div className="buttn"></div>
                </div>
            
        </div>
        </body>
    )

}
}
export default Slider