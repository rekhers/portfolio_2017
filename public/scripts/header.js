import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaQuery from 'react-responsive';
import styles from '../stylesheets/header.css.js';

export class Header extends React.Component{
    constructor(props){
      super(props);

    }


 handleClick(){

 }

render(){
    return (
    <div id="home" style={styles.container}>

      <div style={styles.text}>
        
      <div> hey, i'm rekha. </div>
      <div style={styles.ling}> linguist,  </div> 
      <div style={styles.dev}> developer, </div>
      <div style={styles.dataVis}> data visualizer.</div> 
     
        </div> 



         <div onClick={this.props.onClick()} id="chevronHolder">
            <div className="blue chevron"> </div>
            <div className="red chevron"> </div>
            <div className="yellow chevron"> </div>
          </div> 
    </div> 
      );
}

}















