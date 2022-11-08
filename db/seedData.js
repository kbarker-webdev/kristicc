const cups = [
    {   name: '20 oz Skinny',
        description: '20 oz Skinny cup. Comes with screw top and straw.',
        price: 30.00,
        img: 'https://imgur.com/si2IV3f.png'
    },
    {   name: '30 oz Skinny',
        description: '30 oz Skinny cup. Comes with screw top and straw.',
        price: 35.00,
        img: 'https://imgur.com/si2IV3f.png'
    },
    {   name: '30 oz Modern Curve',
        description: '30 oz Modern Curve Design. Comes with screw top and straw.',
        price: 35.00,
        img: 'https://imgur.com/7JDRBXG.png'
    },
    {   name: '35 oz Straight Classic Skinny',
        description: '35 oz Straight Classic Skinny. Comes with screw top and straw.',
        price: 40.99,
        img: 'https://imgur.com/Xis0Cbx.png'
    },
    {   name: '25 oz Stemless (AKA Snowman Football)',
        description: '25 oz Skinny cup. Comes with screw top and straw.',
        price: 40.99,
        img: 'https://imgur.com/reaM2mH.png'
    },
    {   name: '12oz Steemless Wine Glass',
        description: '12oz STEMLESS WINE GLASS W/ STRAW AND TINTED SLIDING LID',
        price: 40.99,
        img: 'https://imgur.com/3AwTS1P.png'
    },
    {   name: '32oz Hydro Bottle',
        description: '32oz Hydro Bottle.',
        price: 40.99,
        img: 'https://imgur.com/fkh6ekM.png'
    },
];

const initialUsers = [
	{
		username: 'kristi',
		password: 'britt4788',
		email: 'kenny@kenny.com',
		admin: true,
	},
    {
		username: 'temp',
		password: 'temp',
		email: 'temp@temp.com',
		admin: true,
	}
];

const customRequests = [
    {
        date: Date.now(),
        pid: '30oz skinny',
        color: '#FFFFF',
        usertext: 'Test Text',
        font: 'Test Font',
        comments: 'additional info on the request...',
        name: 'Kenny',
        phone: '111-111-1111',
        email: 'test@test.com'
    },
    {
        date: Date.now(),
        pid: '20oz skinny',
        color: '#FFFFF',
        usertext: 'Test Text',
        font: 'Test Font',
        comments: 'additional info on the request...',
        name: 'Shirly',
        phone: '111-111-1111',
        email: 'test@test.com'
    },
    {
        date: Date.now(),
        pid: '30oz skinny',
        color: '#FFFFF',
        usertext: 'Test Text',
        font: 'Test Font',
        comments: 'additional info on the request...',
        name: 'Suzzy',
        phone: '111-111-1111',
        email: 'test@test.com'
    },
    {
        date: Date.now(),
        pid: '30oz skinny',
        color: '#FFFFF',
        usertext: 'Test Text',
        font: 'Test Font',
        comments: 'additional info on the request...',
        name: 'Adam',
        phone: '111-111-1111',
        email: 'test@test.com'
    }
]

const portfolio = [
    {
        name: '',
        description: '',
        img: 'IMG_1098.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_1099.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_1100.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_1102.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_1103.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_1121.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_1122.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_1126.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2134.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2135.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2136.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2137.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2140.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2141.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2143.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2147.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2148.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2149.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2193.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2194.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2195.jpg'
    },
    {
        name: '',
        description: '',
        img: 'IMG_2389.jpg'
    },
    {
        name: '',
        description: '',
        img: 'Nurse badge.jpg'
    }
];

module.exports = {
	cups,
	initialUsers,
    customRequests,
    portfolio
};
