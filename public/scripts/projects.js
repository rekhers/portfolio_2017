import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/projects.css.js';

export class Projects extends React.Component{
	constructor(){
		super();
	}

	render(){
		return( <div id="projects" style={styles.container}></div>)
	}
}