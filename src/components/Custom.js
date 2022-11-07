import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, createCustomRequest } from "../axios-services";
import {
	Button,
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
		r: "255",
		g: "255",
		b: "255",
		a: "1",
	});
	const { r, g, b, a } = sketchPickerColor;
	const navigate = useNavigate();

	useEffect(() => {
		getProductById(id)
			.then(res => {
				if (!res.id) {
					navigate(-1);
				}
				setProduct(res);
			});
	}, []);


	const buttonSX = {
        backgroundColor: 'rgba(255,255,255,0.50)', 
        marginTop: '25px', 
        color: '#080710',
        "&:hover": {
            color:  '#080710',
            backgroundColor: 'rgba(255,255,255,0.75)'
          },
    }

	const handleSubmitRequest = () => {
		createCustomRequest(sketchPickerColor.hex, product.name, userText, font, comments, name, phone, email)
			.then(res => {
				alert('Your request has been submitted. Kristi will contact you about your order ASAP.');
				navigate('/customize');
			})
	}

	return (
		<div id='single-product'>
			<img src={product.img} alt={product.name} />
			<Paper
				elevation={3}
				sx={{ p: 2, backgroundColor: 'rgba(255, 255, 255, 0.13)', color: 'white' }}
				id='spv'>
				<div className="product-info">
					<h2 className="product-info-title">{product.name} ${product.price}</h2>
					<h3 className="product-description-title">{product.description}</h3>
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
					<label for="inp" class="inp">
						<input type="text" id="inp" placeholder="&nbsp;" onChange={e => setText(e.target.value)} />
						<span class="label">Text</span>
						<span class="focus-bg"></span>
					</label>


					<br />
					<label for="inp" class="inp">
						<input type="text" id="inp" placeholder="&nbsp;" onChange={e => setFont(e.target.value)} />
						<span class="label">Font</span>
						<span class="focus-bg"></span>
					</label>
					<br />
				</div>
				<div className='contact-info'>
					<b className="title">Contact Information</b>
					<br /><br />
					<label for="inp" class="inp">
						<input type="text" id="inp" placeholder="&nbsp;" onChange={e => setName(e.target.value)} />
						<span class="label">Name</span>
						<span class="focus-bg"></span>
					</label>
					<br />
					<label for="inp" class="inp">
						<input type="text" id="inp" placeholder="&nbsp;" onChange={e => setPhone(e.target.value)} />
						<span class="label">Phone Number</span>
						<span class="focus-bg"></span>
					</label>
					<br />
					<label for="inp" class="inp">
						<input type="text" id="inp" placeholder="&nbsp;" onChange={e => setEmail(e.target.value)} />
						<span class="label">Email</span>
						<span class="focus-bg"></span>
					</label>
					<br />

				</div>
				<label for="inp" class="inp">
					<input type="text" id="inp" placeholder="&nbsp;" onChange={e => setComments(e.target.value)} />
					<span class="label">Comments</span>
					<span class="focus-bg"></span>
				</label>
				<Button className="button"
				sx={buttonSX}
					id='submit'
					onClick={() => handleSubmitRequest()}
				>
					Submit Custom Request
				</Button>
			</Paper>

		</div>
	)
}

export default Custom;