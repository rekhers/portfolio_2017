import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

const Container = () => {
    return (
      <div id="text">
      <div className="headline">
        <div id="title">rekha tenjarla</div>
        <div id="byline"> <div id="mostly"> (mostly) </div> front-end developer </div>
      </div>

        <div id="description"> I'm currently building a new site with react, but check out my <a className="links" href="http://rekha-site-316.herokuapp.com/"> old portfolio </a>, my <a href="https://github.com/rekhers" className="links"> code </a>, and my <a href="https://www.linkedin.com/in/rekha-tenjarla-588a19112" className="links"> linkedin </a>. </div>
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













