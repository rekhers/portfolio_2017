import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/projects.css.js';


export class Projects extends React.Component{

	constructor(){
		super();
		this.state = { overlay: { 
			position: 'absolute',
			top: '0',
			left: '0',
			width: '100%',
			height: '100%',
			backgroundColor: 'black',
			zIndex: '50',
		}
	}

		this.hover = this.hover.bind(this);
	}

	hover(elem){
		console.log("getting to mouseover?");
		console.log(elem.target);
		}


	render(){
		return (<div id="projects" style={styles.background}> 


		<div style={styles.container}> 


					<div id='1' style={styles.picHolder} onMouseEnter={() => this.hover.bind(this)}> 
						<img style={styles.mediumpic} src='public/toptracks.png'/>
						<div style={this.state.overlay}> </div> 
					</div> 

					
					<div id='2' style={styles.picHolder} onMouseEnter={this.hover}>  
						<img style={styles.pic} src="public/tweets.png" />
						<div style={this.state.overlay}> </div> 

					</div> 

					
					<div id='3' style={styles.picHolder} onMouseEnter={this.hover}>  
						<img style={styles.mediumpic} src="public/tweets-usmap.png" />
						<div style={this.state.overlay}> </div> 
					</div> 


					<div id='4' style={styles.picHolder} onMouseEnter={this.hover}> 
						<img style={styles.pic} src='public/d3-life-globe.png'/>
						<div style={this.state.overlay}> </div> 
					</div> 


					<div style={styles.picHolder} onMouseEnter={this.hover}>  
						<img style={styles.thinpic} src='public/previousprofile.png'/>
						<div style={this.state.overlay}> </div> 
					</div> 

					<div style={styles.picHolder} onMouseEnter={this.hover}>  
						<img style={styles.thinpic} src='public/txchoropleth.png'/>
						<div style={this.state.overlay}> </div> 

					</div> 


					<div style={styles.picHolder} onMouseEnter={this.hover}>  
						<img style={styles.mediumpic} src='public/wsumaptooltip.png'/>
						<div style={this.state.overlay}> </div> 

					</div> 

		</div>

		</div>)

	}
}

