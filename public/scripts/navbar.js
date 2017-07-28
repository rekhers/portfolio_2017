import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../stylesheets/navbar.css.js'

    const Navbar = () => {
    return (<div style={styles.navbar}> 
        <div style={styles.text}>
         rekha tenjarla
         </div>

         <div style={styles.navLinks}>
         <div style={styles.links}> about </div>
         <div style={styles.links}> projects </div>
         <div style={styles.links}> contact </div>
         </div>
     </div>)

}

export default{
  Navbar: function(){
    return (<div> 
            <Navbar/> 
            </div>
            )
  }

};