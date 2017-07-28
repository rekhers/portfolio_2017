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
    borderBottom: '2px solid -webkit-gradient(linear, right top, left top, from(#05f), color-stop(85%, #7201b2), to(#f83371))',
    zIndex: 99,
    display: 'flex',
    flexDirection:'row',
    	justifyContent: 'space-around'

},

navLinks:{
	color: "#fff",
	fontFamily: 'Montserrat',
	fontSize: '1.5em',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'flex-end'
},

text:{
fontFamily: 'Montserrat',
  fontSize: '1.8em',
  background: '-webkit-gradient(linear, right top, left top, from(#05f), color-stop(85%, #7201b2), to(#f83371))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}

}