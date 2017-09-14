import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../stylesheets/contact.css.js';
import FontAwesome from 'react-fontawesome';

/*
*
* TODO: add class level styles here 
* 
*/
export const Contact = () => {
	return(<div id="contact" style={styles.container} className="contactContainer"> 
		 	<a className="contactIcon" href="http://www.github.com/rekhers"><FontAwesome style={styles.icons} name='github'/> </a>
		 	<a className="contactIcon"  href="https://www.linkedin.com/in/rekha-tenjarla-588a19112"><FontAwesome style={styles.icons} name='linkedin-square' /></a>
		 	<a className="contactIcon" href="mailto:rekha.tenjarla@gmail.com"><FontAwesome style={styles.icons} name='envelope' /></a>

		 	<div style={styles.pointy}> ☝︎ </div>
		</div>)
}