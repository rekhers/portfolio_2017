import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../stylesheets/contact.css.js';
import FontAwesome from 'react-fontawesome';


export const Contact = () => {
	return(<div id="contact" style={styles.container}> 
		 	<FontAwesome style={styles.icons} name='github' />
		 	<FontAwesome style={styles.icons} name='linkedin-square' />
		 	<FontAwesome style={styles.icons} name='envelope' />

		</div>)
}