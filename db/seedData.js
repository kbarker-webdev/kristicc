const cups = [
    {   name: '20 oz Skinny',
        description: '20 oz Skinny cup. Comes with screw top and straw.',
        price: 40.99,
        img: 'https://imgur.com/si2IV3f.png'
    },
    {   name: '30 oz Skinny',
        description: '30 oz Skinny cup. Comes with screw top and straw.',
        price: 40.99,
        img: 'https://imgur.com/si2IV3f.png'
    },
    {   name: '30 oz Modern Curve',
        description: '30 oz Modern Curve Design. Comes with screw top and straw.',
        price: 40.99,
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
		username: 'JohnSnow',
		password: 'winteriscoming',
		email: 'king@inthenorth.com',
		admin: false,
	},
	{
		username: 'admin',
		password: 'admin',
		email: 'admin@admin.com',
		admin: true,
	},
	{
		username: 'ketsy',
		password: 'ketsy',
		email: 'ketsy@ketsy.com',
		admin: true,
	},
	{
		username: 'cameron',
		password: 'cameron',
		email: 'cameron@cameron.com',
		admin: true,
	},
	{
		username: 'kenny',
		password: 'kenny',
		email: 'kenny@kenny.com',
		admin: true,
	},
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

module.exports = {
	cups,
	initialUsers,
    customRequests
};
