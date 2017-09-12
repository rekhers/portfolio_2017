import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/projects.css.js';


export class Projects extends React.Component{

	constructor(){
		super();
	// 	this.state = { overlay: { 
	// 		position: 'absolute',
	// 		top: '0',
	// 		left: '0',
	// 		width: '100%',
	// 		height: '100%',
	// 		backgroundColor: 'black',
	// 		zIndex: '50',
	// 		opacity: '.5',
	// 		overflowx:'hidden'
	// 	}
	// }
	}



	render(){
		return (<div className="projects" id="projects"> 


		<div className="container"> 


					<div className="picHolderMedium"> 
						<img className="mediumpic" src='public/assets/toptracks.png'/>
						<div className="overlay"> sdfsd </div> 
					</div> 

					
					<div className="picHolder">  
						<img className="pic"src="public/assets/tweets.png" />
						<div className="overlay"> sdfsdf</div> 

					</div> 

					
					<div className="picHolderMedium">  
						<img className="mediumpic" src="public/assets/tweets-usmap.png" />
						<div className="overlay">fsdf </div> 
					</div> 


					<div className="picHolder"> 
						<img className="pic" src='public/assets/d3-life-globe.png'/>
						<div className="overlay"> sdfsdf</div> 
					</div> 


					<div className="picHolderThin">  
						<img className="thinpic" src='public/assets/previousprofile.png'/>
						<div className="overlay"> sdfs</div> 
					</div> 

					<div className="picHolderThin">  
						<img className="thinpic" src='public/assets/txchoropleth.png'/>
						<div className="overlay"> sdfds </div> 

					</div> 


					<div className="picHolderMedium">  
						<img className="mediumpic" src='public/assets/wsumaptooltip.png'/>
						<div className="overlay"> asf as</div> 

					</div> 

		</div>

		</div>)

	}
}

