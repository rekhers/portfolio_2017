import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../stylesheets/navbar.css.js';


export class Navbar extends React.Component {

    constructor(){
        super();
        this.state = {background: ''};
    }

   
    render(){
        return (<div id="navbar" style={styles.navbar}> 
            <div style={styles.text}>
             rekha tenjarla
             </div>
             <div style={styles.navLinks} onClick={this.props.onClick()} >
                 <div style={styles.links} ref="about" > about </div>
                 <div style={styles.links}> projects </div>
                 <div style={styles.links}> contact </div>
             </div>
         </div>)
    }

}

