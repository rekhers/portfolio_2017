import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaQuery from 'react-responsive';
import styles from '../stylesheets/header.css.js';





const Container = () => {
    return (
    <div style={styles.container}>


      <div style={styles.text}>
        

      <div> hey, i'm rekha. </div>
      <div> linguist,  </div> 
      <div> developer, </div>
      <div> data visualizer.</div> 
     
        </div> 
    </div> 
      );
}


export default{
  landingDiv: function(){
    return (<div> 
            <Container/> 
            </div>
            )
  }

};













