import Swiper from 'swiper/bundle'
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useState, useEffect } from "react"
import { getPortfolio } from "../axios-services";
import '../style/Portfolio.css';

    

const Portfolio = () => {

    const [portfolio, setPortfolio] = useState([]);
    const [, updateState] = React.useState();
    let reload = true;
    const forceUpdate = React.useCallback(() => {
      if (reload) updateState({});
      reload = false;
    }, []);

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

    useEffect(() => {
        getPortfolio()
            .then(res => {
                setPortfolio(res);
                
            })
            
    }, [])

    const params = {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }

    return (
        <div className="swiper" onMouseEnter={forceUpdate}>
          <div className="swiper-wrapper">
            {portfolio.map((p) => {
              return (
                <div className="swiper-slide">
                  <img
                    className='portfolio-img'
                    src={"/img/" + p.img}
                    alt={`${p.name}`}
                    width={'15%'}
                    height={'15%'}
                    // onClick={forceUpdate}
                  />    
                </div>
              )
            })}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div>
        </div>
    )
  
}

export default Portfolio;