import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/contact.css.js';


const Container = () =>{
	return (<div style={styles.background}> 
		 <img style={styles.pic} src='public/circle_face.gif'/>
		</div>)
}

export default{
	Contact: function(){
    return (<div> 
            <Container/> 
            </div>
            )
  }
}