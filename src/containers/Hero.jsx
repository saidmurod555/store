import  { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


import Woman from "../images/Woman.svg";
import Animate from "../images/Hero-animate.svg";

import "../styles/hero.css";

class Hero extends Component {
  render(){
    return (
    <div className="pb-20 md:pb-40">
  <div className="mx-auto max-w-[600px]">
    <Carousel>
      <div>
        <img src={Woman} alt="Img" className="w-[50%]" />
      </div>
      <div>
        <img src={Woman} alt="Img" className="w-[50%]" />
      </div>
      <div>
        <img src={Woman} alt="Img" className="w-[50%]" />
      </div>
      <div>
        <img src={Woman} alt="Img" className="w-[50%]" />
      </div>
      <div>
        <img src={Woman} alt="Img" className="w-[50%]" />
      </div>
      <div>
        <img src={Woman} alt="Img" className="w-[50%]" />
      </div>
    </Carousel>
  </div>
  <div className="flex justify-center mt-10 opacity-100 md:mt-20">
    <img src={Animate} alt="" />
  </div>
</div>

  );
  }
  
}

export default Hero;
