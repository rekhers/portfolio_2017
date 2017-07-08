import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaQuery from 'react-responsive';

const A = () => {
    return (
      <div className="test">
        <MediaQuery query='(min-device-width: 1224px)'>
          <div>You are a desktop or laptop</div>
          <MediaQuery query='(min-device-width: 1824px)'>
            <div>You also have a huge screen</div>
          </MediaQuery>
          <MediaQuery query='(max-width: 1224px)'>
            <div>You are sized like a tablet or mobile phone though</div>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          <div>You are a tablet or mobile phone</div>
        </MediaQuery>
        <MediaQuery query='(orientation: portrait)'>
          <div>You are portrait</div>
        </MediaQuery>
        <MediaQuery query='(orientation: landscape)'>
          <div>You are landscape</div>
        </MediaQuery>
        <MediaQuery query='(min-resolution: 2dppx)'>
          <div>You are retina</div>
        </MediaQuery>
      </div>
    );
};

const Container = () => {
    return (
    <div id="text" className="container">
    <div className="row">
      <div id="col" className="col-xs-12">
      <div className="headline">
        <div id="title">rekha tenjarla</div>
        <div id="byline"> <div id="mostly"> (mostly) </div> front-end developer </div>
      </div>
   

          <div id="description"> I'm currently building a new site with react, but check out my <a className="links" href="http://rekha-site-316.herokuapp.com/">old portfolio</a>, my <a href="https://github.com/rekhers" className="links"> code</a>, and my <a href="https://www.linkedin.com/in/rekha-tenjarla-588a19112" className="links"> linkedin </a> </div>
            
    
          </div>

          </div>

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













