import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../stylesheets/navbar.css.js';


export class Navbar extends React.Component {

    constructor(){
        super();
        this.state = {background: ''};
        this.test = this.test.bind(this);
    }

    test(){
        console.log("scrolllll");
    }

    render(){
        return (<div style={styles.navbar} onScroll={this.test}> 
            <div style={styles.text}>
             rekha tenjarla
             </div>
             <div style={styles.navLinks}>
                 <div style={styles.links}> about </div>
                 <div style={styles.links}> projects </div>
                 <div style={styles.links}> contact </div>
             </div>
         </div>)
    }

}

