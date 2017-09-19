import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../stylesheets/contact.css.js';
import FontAwesome from 'react-fontawesome';

/*
*
* TODO: add class level styles here 
* 
*/
export class Contact extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
	return(<div id="contact" style={styles.container} className="contactContainer"> 
		<div style={styles.iconRow}>
		 	<a style={styles.github} className="contactIcon" href="http://www.github.com/rekhers"><FontAwesome style={styles.icons} name='github'/> </a>
		 	<a style={styles.linkedin} className="contactIcon"  href="https://www.linkedin.com/in/rekha-tenjarla-588a19112"><FontAwesome style={styles.icons} name='linkedin-square' /></a>
		 	<a style={styles.mail} className="contactIcon" href="mailto:rekha.tenjarla@gmail.com"><FontAwesome style={styles.icons} name='envelope' /></a>
		</div>
		 	<div onClick={this.props.onClick()} className="pointy" title="go back up">☝︎</div>

		 	<div style={styles.smallText}> designed & coded with ♥ by me </div>
		</div>)

}
}