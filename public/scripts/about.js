import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/about.css.js';



const Bio = () => {
    return <div style={styles.bio}> I'm a self-taught developer passionate about leveraging the Open Web to   </div> 
    
}


const Pic = () =>{
  return ( <div style={styles.cont}>
  <img style={styles.pic} src='public/circle_face.gif'/>
  </div>
  )
    
}



const About = () => {
  return (
      <div style={styles.container}>
      <Pic />
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