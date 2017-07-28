import React from 'react';

export default{

navbar:{
	backgroundColor: "#222",
	width: "100%",
	position: "fixed",
	height: "auto",
	paddingLeft: "2%",
	paddingTop: "1%",
	paddingBottom: "1%",
    zIndex: 99,
  	display: 'flex',
  	flexFlow: 'row',
  	justifyContent:'space-between',
  	borderBottom: '1px solid #FFF'
},

navLinks:{
	color: "#fff",
	fontFamily: 'Montserrat',
	fontSize: '1.5em',
	display: 'flex',
	flexFlow: 'row',
	justifyContent: 'space-around',
	paddingRight: '5%'	
},

links:{
	paddingRight: '10%'
},

text:{
fontFamily: 'Montserrat',
  fontSize: '1.8em',
  background: '-webkit-gradient(linear, right top, left top, from(#05f), color-stop(50%, #7201b2), to(#f83371))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}

}