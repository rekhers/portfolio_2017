/*
*
* landing styles
*
*/ 
import React from 'react';

export default{

topSection:{
  paddingLeft: "2%",
  // background: '#f06457',
  background:"#222",
  height: '60%',
  color: "#FFF"
}, 

nav:{
  color: "#29FCA5",
  fontSize: "2vw",
  fontFamily: 'Space Mono',
  width: "50%"
},


triangle:{
    content: "",
    position: "fixed",
    width: "0",
    height: "0",
    marginTop: "54.4%",
    marginLeft: "-0.5em",
    left: "50%",
    boxSizing: "borderBox",
    border: "3em solid black",
    borderColor: "transparent transparent #f06457 #f06457",
    transformOrigin: "0 0,",
    transform: "rotate(-45deg)",
    boxShadow: "-2px 2px 2px 0 rgba(0, 0, 0, 0.4)"
},

titleStyle:{
  fontFamily: 'Space Mono', 
  fontSize: '3.5vw',
  fontWeight: '200'

}, 

italic:{
  fontStyle: 'italic'
},

byline: {
    fontFamily: 'Anonymous Pro',
    fontSize: '1.975vw',
    fontWeight: '300'

}

}

