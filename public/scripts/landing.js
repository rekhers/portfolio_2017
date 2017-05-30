import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

//lets figure out how we can use relative paths for this?
import styles from '/Users/Rekha/Dev/react_project/public/scripts/styles.css.js';

export default{

/*
*
* Shared Elements
*
*/
DotNavigation: function(){
    return (
      <svg id="dots" height="140" width="50">
        <circle className="selected" cx="20" cy="10" r="7" stroke="white" fill="white"/>
       <circle cx="20" cy="40" r="6" fill="none" stroke="black" />
        <circle cx="20" cy="70" r="6" fill="none" stroke="black"/>
        <circle cx="20" cy="100" r="6" fill="none" stroke="black"/>
        <circle cx="20" cy="130" r="6" fill="none" stroke="black"/>
      </svg>
  );
},


DownArrow: function(){
    return <div className="arrow-down"></div> 
}, 




HeaderText: function(){
    return  (
      <div style={styles.header}> 
          <div style={styles.titleStyle}> rekha tenjarla </div>
          <div style={styles.byline}> <span style={styles.bold}> linguist </span> turned <span style={styles.bold}> web developer </span></div>
      </div>);
},


/*
*
* particle background, container
*
*/
Particles: function(){
    return <div className="section" style={styles.particles} id="particle-container"></div>;
},





/*
*
* embed spotify playlist 
*
*/
SpotifyPlaylist: function(){
    return <iframe src="https://open.spotify.com/embed/track/41eiwHEX8iegmqmS2cf7oX" style={styles.spotify}> </iframe>;
}




};













