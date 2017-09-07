import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/about.css.js';



const Bio = () => {
    return <div style={styles.bio}> I'm a javascript developer excited about visualizing data and 
                          making the world a better and/or funner place.
                                    
                                     I've gone down the React rabbit hole this past year, and I'm a better person and developer for it.
                                    
                                    Building apps is my vehicle to explore things that I'm passionate about &mdash; music, language, and social justice. 
    </div> 
    
}


const Pic = () =>{
  return ( <div style={styles.cont}>
  <img style={styles.pic} src='public/circle_face.gif'/>
  </div>
  )
    
}



export const About = () => {
  return (
      <div id="about" style={styles.container}>
      <Pic />
          <Bio /> 
      </div>
    )

}


