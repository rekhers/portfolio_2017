import React from 'react';

export default{

navbar:{
	backgroundColor: "#222",
	width: "100%",
	position: "fixed",
	height: "auto",
	paddingLeft: "5%",
	paddingTop: "1%",
	paddingBottom: "1%",
    zIndex: 99,
  	display: 'flex',
  	flexFlow: 'row',
  	justifyContent:'space-between'
  },

navLinks:{
	color: "#fff",
	fontFamily: 'Montserrat',
	fontSize: '1.5em',
	display: 'flex',
	flexFlow: 'row',
	justifyContent: 'space-around',
	paddingRight: '9%'	
},

links:{
	marginLeft: "10%",
	cursor: 'pointer'
},

text:{
	fontFamily: 'Montserrat',
  fontSize: '1.8em',
  background: 'linear-gradient(216deg, #ff8a40, #fd5068, #dc4588)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: "pointer"
}

}