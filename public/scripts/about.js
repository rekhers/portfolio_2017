import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/about.css.js';



const Bio = () => {
    return <div style={styles.bio}> I'm a javascript developer excited about visualizing data and building
                                    inuititive web apps that make the world a better and/or funner place. <br/><br/>
                                    
                                    I currently work at the Atlas Project in Washington, D.C., where I 
                                    contribute to a propietary toolkit of 
                                    political data for high-profile clients affiliated with the Democratic party.<br/><br/>

                                    Outside of work, I enjoy building apps that integrate social media APIs and allow me 
                                    to explore things that I'm passionate about -- music, language, and social justice. 
    </div> 
    
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