import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/about.css.js';

/*
*
* Tools was added in later -- TODO: integrate it as a single file w/ inline styles
*
*/

const Bio = () => {
    return <div style={styles.bio}> I'm a javascript developer excited about visualizing data and 
                        
                        thinking about how to do it in a way that might make the world a better place.
                                    
                        I've gone down the React rabbit hole this past year, and I'm a better person for it.
                                    
                        Writing code is my vehicle to exploring the things that I'm passionate about &mdash; music, language, and social justice. 
    </div> 
    
}


const Pic = () =>{
  return ( <div style={styles.cont}>
  <img style={styles.pic} src='public/assets/circle_face.gif'/>
  </div>
  )
    
}



export class About extends React.Component{


  constructor(props){
    super(props);
  }


  render(){
  return (
    <div id="about" > 
      <div style={styles.container}>
      <div style={styles.lilRow}> 
          <Pic />
          <Bio /> 
          </div> 
          <div style={styles.pointDownDiv}> 
          <div style={styles.text}> click to see my projects below</div> 
          <div onClick={this.props.onClick()} className="pointDown">☟</div> 
      </div>
    </div> 
    </div>
    )
}

}


