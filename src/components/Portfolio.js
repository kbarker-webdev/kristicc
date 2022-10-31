import React, { useState, useEffect } from "react"
import { getPortfolio } from "../axios-services";
import { Link } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import '../style/CustomProducts.css';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        getPortfolio()
            .then(res => {
                setPortfolio(res);
                console.log(res)
            })
    }, [])

    const handleMouseEnter = (e) => {
        e.target.parentNode.parentNode.parentNode.className +=
            ' hovered-product';
    };

    const handleMouseLeave = (e) => {
        e.target.parentNode.parentNode.parentNode.className = '';
    };

    const handleMouseEnterButton = (e) => {
        e.target.parentNode.parentNode.className += ' hovered-product';
    };

    const handleMouseLeaveButton = (e) => {
        e.target.parentNode.parentNode.className = '';
    };

    return (
        <div>
            <ul className='product-list'>
                {portfolio.map((p) => {
                    return (
                        <li id={p.id} key={p.id}>
                            <div className='portfolio-product'>
                                <Fade in={true}>
                                    {/* <Link to={`${p.id}`}> */}
                                        <img
                                            src={"/img/" + p.img}
                                            alt={`${p.name}`}
                                            height='200px'
                                            className='product-img'
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        />
                                    {/* </Link> */}
                                </Fade>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>


    )
}

export default Portfolio;