import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from "../axios-services";
import {
	TextField,
	Button,
	InputLabel,
	Select,
	MenuItem,
	Paper,
} from '@mui/material';
import '../style/SingleProductView.css';

const SingleProductView = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductById(id)
            .then(res => {
                if (!res.id) {
                    navigate(-1);
                }
                setProduct(res);
            });
    }, [])

    return (
        <div id='single-product'>
            <img src={product.img} alt={product.name} />
            <div className='product-info'>
                <Paper sx={{ p: 2 }}>
                            <h2>{product.name} ${product.price}</h2>
							<h3>{product.description}</h3>
                            <Button 
                                sx={{ mt: 2 }} 
                                variant="contained"
                                onClick={() => navigate(`/custom/${id}`)}
                                >
                                    Customize
                                </Button>
                </Paper>
            </div>
        </div>
    )
}

export default SingleProductView;