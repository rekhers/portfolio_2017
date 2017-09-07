import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaQuery from 'react-responsive';
import styles from '../stylesheets/header.css.js';

export const Header = () => {
    return (
    <div id="home" style={styles.container}>

      <div style={styles.text}>
        
      <div> hey, i'm rekha. </div>
      <div style={styles.ling}> linguist,  </div> 
      <div style={styles.dev}> developer, </div>
      <div style={styles.dataVis}> data visualizer.</div> 
     
        </div> 
    </div> 
      );
}















