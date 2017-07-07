import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


const colorToggle =() => {

}


const Container = () => {
    return (
      <div>
      <div className="text">
        <div id="title">rekha tenjarla</div>
        <div id="byline"> <div id="mostly"> (mostly) </div> front-end developer </div>
        </div>

        <div id="description"> I'm currently building a new site with react, but check out my <div className="links"> old portfolio </div>, my <div className="links"> code </div>, and my <div className="links"> linkedin </div>. </div>
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













