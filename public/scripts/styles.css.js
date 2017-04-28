/*
*
* header styles
*
*/ 
import React from 'react';

export default{

header: {
    position: "absolute",
    left: "24%",
    top:"23%"
},

titleStyle:{
  fontFamily: 'Roboto',
  letterSpacing: '5px',
  fontSize: '7.7vw',
  fontWeight: '400',
  textAlign:'center',
  WebkitTextStroke: '2px #FFF',
  WebkitTextFillColor: 'transparent'
},

byline:{
  textAlign:'center',
  fontFamily: 'Roboto',
  letterSpacing: '5px',
  fontSize: '2.4vw',
  fontWeight: '400',
  color: 'rgba(255,255,255, 0.9)'
},

bold:{
   fontWeight: '600'
},

italic:{
  letterSpacing: '2px',
  fontWeight: '300'
},


arrowStyle:{
  WebkitTextStroke: '2px #FFF',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Raleway'
},


aboutText:{
  fontFamily: 'Roboto',
  fontSize: '2vw',
  fontWeight: '300',
  color: '#848484',
  backgroundColor: '#f5f5f5',
  paddingLeft:'10%',
  paddingRight:'10%',
  paddingTop:'2%',
  paddingBottom:'2%'
},

spacer:{
  background: "WebkitLinearGradient(left, red, blue)",
  height: "auto",
  width: "100%"
},

triangle:{
  width: '0', 
  height: '0', 
  borderLeft: '25px solid transparent',
  borderRight: '25px solid transparent',
  borderTop: '25px solid #FFF',
  marginLeft: '45%',
  position:'absolute'
},

cutout:{
   zIndex:"9999",
   position: "relative",
   left: "30%",
   top: "-25%"

},

background:{
  backgroundColor: "#f5f5f5",
},

particles:{
  margin: '0px',
  height: '100%',
  background: 'WebkitLinearGradient(left, #6819e8 0%,#7437d0 35%,#615fde 68%,#6980f2 100%)',
  zIndex: '-1'
},

spotify:{
  width: '300px',
  height:'300px'
},

city:{
  width: '50%',
  height: '50%',
  fill: '#6819e8'
},

london: {
  width: "420px",
  height: "320px",
  fill: "white",
  stroke: "black",
  strokeWidth: "1"
},

austin: {
  marginLeft: "20px",
  fill: "#FFF",
  stroke: "black",
  strokeWidth: "2",
  width: "300px",
  height: "300px"
},

soCo: {
  shapeRendering:"crispEdges",
  stroke: "black",
  strokeWidth: ".5",
  width: "300px",
  height: "300px"
},

graypanel:{
  background: "gray",
  height: "50%"
},

placeTitle:{
  fontFamily: 'Raleway',
  fontSize: '3vw',
  fontWeight: '300',
  color: '#848484',
  marginLeft: "2%",
  marginTop: "2%"
}, 

seattle: {
  width: "300px",
  height: "300px"
},

map: {
  position: "absolute",
  top:"0",
  bottom:"0",
  width:"100%"
}


}

