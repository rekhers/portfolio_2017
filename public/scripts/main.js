import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import header from '../scripts/header.js';
import about from '../scripts/about.js';
import styles from '../stylesheets/navbar.css.js'

const Navbar = () => {
    return (<div style={styles.navbar}> 
    	<div style={styles.text}>
         rekha tenjarla
         </div>

         <div style={styles.navLinks}>
         <div> about </div>
         <div> projects </div>
         <div> contact </div>
         </div>
     </div>)

}

var page = (    <div>
				<Navbar/>
                <header.landingDiv/>
                 <about.aboutDiv/>
                </div>
			);


let container = document.getElementById("container");

ReactDOM.render(page,container);

