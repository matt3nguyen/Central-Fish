import React from 'react';
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
    let time = 6000;

    var manualNav = function(manual) {
        slides.forEach((slide) => {
            slide.classList.remove('running');
        })

        btns.forEach((buttn) => {
                buttn.classList.remove('running');
             })
        
        slides[manual].classList.add('running');
        btns[manual].classList.add('running');
    }
    btns.forEach((buttn, n) => {
    buttn.addEventListener("click", () => {
            manualNav(n);
            currentSlide = n;
            console.log(n)
        });
    }); 


    ///auto
        var repeat = function(activeClass){
        let active = document.getElementsByClassName('running');
        
        let i = currentSlide;
        var repeater = () => {
          
          setTimeout(function(){
            
            [...active].forEach((activeSlide) => {
              activeSlide.classList.remove('running');
            });
  
          slides[i].classList.add('running');
          btns[i].classList.add('running');
          console.log(i)
          i++;
  
          if(slides.length === i){
            i = 0;
          }
          if(i >= slides.length){
            return;
          }
          repeater();
        }, time);
        }
        repeater();
      }
      repeat();
    }

    render() {

    
    return(
        <div className="containerS">
            <div className="slider">

                <div className="slide running">
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
        </div>
    )

}
}
export default Slider