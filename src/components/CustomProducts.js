import React, { useState, useEffect } from "react";
import { getAllProducts } from "../axios-services";
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Fade from '@mui/material/Fade';
import '../style/CustomProducts.css';

const CustomProducts = (props) => {
    const [products, setProducts] = useState([]);
    const { edit } = props;
    
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

    useEffect(() => {
        getAllProducts()
			.then(res => {
				setProducts(res)
			});
        
    }, [])

    return (
        <div>
            <ul className='product-list'>
				{products.map((product, index) => {
					return (
						<li id={product.id} key={product.id}>
							<div className='product'>
								<Fade in={true}>
								<Link to={`${product.id}`}>
									<img
										src={product.img}
										alt={`${product.name}`}
										height='200px'
										className='product-img'
										onMouseEnter={handleMouseEnter}
										onMouseLeave={handleMouseLeave}
									/>
								</Link>
								</Fade>
								{edit ? 
								<Fade in={true}>
								<Button
									id={index}
									variant='contained'
									onMouseEnter={handleMouseEnterButton}
									onMouseLeave={handleMouseLeaveButton}
									onClick={handleEdit}
								>
									Edit
								</Button>
								</Fade> : null

							}
								<Fade in={true}><h2>${product.price}</h2></Fade>
									
								<Fade in={true}><h4>{product.name}</h4></Fade>
								
							</div>
						</li>
					);
				})}
			</ul>
        </div>
    )
}

export default CustomProducts;