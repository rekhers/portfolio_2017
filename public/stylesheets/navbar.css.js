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
	paddingRight: '10%',
	margin: '3%',
	cursor: 'pointer'
},

text:{
fontFamily: 'Montserrat',
  fontSize: '1.8em',
  background: 'linear-gradient(216deg, #ff8a40, #fd5068, #dc4588)',
  // background: '-webkit-gradient(linear, right top, left top, from(#05f), color-stop(30%, #7201b2), to(#f83371))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}

}