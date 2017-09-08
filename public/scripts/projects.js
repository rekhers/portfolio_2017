import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/projects.css.js';


export const Projects = () =>{
	return (<div id="projects" style={styles.background}> 

		<div style={styles.container}> 

					<div style={styles.picHolder}> 
						<img style={styles.mediumpic} src='public/toptracks.png'/>
					</div> 

					
					<div style={styles.picHolder}>  
						<img style={styles.pic} src="public/tweets-usa.png" />
					</div> 

						<div style={styles.picHolder}>  
						<img style={styles.mediumpic} src="public/tweets-usmap.png" />
					</div> 

					<div style={styles.picHolder}> 
						<img style={styles.pic} src='public/d3-life-globe.png'/>
					</div> 


					<div style={styles.picHolder}>  
						<img style={styles.thinpic} src='public/previousprofile.png'/>
					</div> 

					<div style={styles.picHolder}>  
						<img style={styles.thinpic} src='public/txchoropleth.png'/>
					</div> 


					<div style={styles.picHolder}>  
						<img style={styles.mediumpic} src='public/wsumaptooltip.png'/>
					</div> 

		</div>

		</div>)
}

