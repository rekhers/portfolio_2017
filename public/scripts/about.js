import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/about.css.js';



const Bio = () => {
    return <div style={styles.flexGrid}> 
      <div style={styles.bio}> tldr; </div> 
      <div style={styles.cont}>
      <img style={styles.pic} src='public/circle_face.gif'/>
      </div>
    </div> 
}


const About = () => {
  return (
      <div style={styles.container}>
          <Bio /> 
      </div>
    )

}




export default{
  aboutDiv: function(){
    return (<div> 
            <About/> 
            </div>
            )
  }

};