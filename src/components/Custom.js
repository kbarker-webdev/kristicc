import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, createCustomRequest } from "../axios-services";
import {
	TextField,
	Button,
	InputLabel,
	Select,
	MenuItem,
	Paper,
} from '@mui/material';

import '../style/SingleProductView.css';


const Custom = () => {
	const [product, setProduct] = useState({});
	const [userText, setUserText] = useState('');
	const [font, setFont] = useState('');
	const [comments, setComments] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const { id } = useParams();
	const [sketchPickerColor, setSketchPickerColor] = useState({
		r: "241",
		g: "112",
		b: "19",
		a: "1",
	});
	const { r, g, b, a } = sketchPickerColor;

	useEffect(() => {
		getProductById(id)
			.then(res => {
				if (!res.id) {
					navigate(-1);
				}
				setProduct(res);
			});
	}, []);


	const handleSubmitRequest = () => {
		createCustomRequest(sketchPickerColor.hex, product.name, userText, font, comments, name, phone, email)
			.then(res => {
				console.log(res)
			})
	}

	return (
		<div id='single-product'>
			<img src={product.img} alt={product.name} />
			<Paper
				elevation={3}
				sx={{ p: 2 }}
				id='spv'>
				<div className="product-info">
					<h2>{product.name} ${product.price}</h2>
					<h3>{product.description}</h3>
					<br />
				</div>
				<div className='custom-info'>
					<b className="title">Custom Options</b><br /><br />
					<input className='color-picker' type='color' onChange={(color) => {
						setSketchPickerColor(color);
					}}
						color={sketchPickerColor}
					/>
					<br />
					<TextField
						sx={{ mb: 2 }}
						id='outlined-required'
						label='Text'
						variant='outlined'
						onChange={(e) => { setUserText(e.target.value) }}
					/>
					<br />
					<TextField
						sx={{ mb: 2 }}
						id='outlined-required'
						label='Font'
						variant='outlined'
						onChange={(e) => { setFont(e.target.value) }}
					/>
					<br />
				</div>
				<div className='contact-info'>
					<b className="title">Contact Information</b>
					<br /><br />
					<TextField
						sx={{ mb: 2 }}
						id='outlined-required'
						label='Name'
						variant='outlined'
						onChange={(e) => { setName(e.target.value) }}
					/>
					<br />
					<TextField
						sx={{ mb: 2 }}
						id='outlined-required'
						label='Phone Number'
						variant='outlined'
						onChange={(e) => { setPhone(e.target.value) }}
					/>
					<br />
					<TextField
						sx={{ mb: 2 }}
						id='outlined-required'
						label='Email'
						variant='outlined'
						onChange={(e) => { setEmail(e.target.value) }}
					/>
					<br />
					
				</div>
				<TextField
						sx={{ mb: 2, width: 460}}
						id='outlined-required'
						label='Comments'
						variant='outlined'
						multiline
						rows={8.5}
						onChange={(e) => { setComments(e.target.value) }}
					/>
					<br />
				<Button
					sx={{ width: 460 }}
					id='submit'
					variant='contained'
					onClick={() => handleSubmitRequest()}
				>
					Submit Custom Request
				</Button>
			</Paper>

		</div>
	)
}

export default Custom;