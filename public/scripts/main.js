import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import landing from '/Users/Rekha/Dev/react_project/public/scripts/landing.js';
import about from '/Users/Rekha/Dev/react_project/public/scripts/about.js';



var page = ( <div>
                <landing.Particles/>
                <landing.HeaderText/>
                <about.Background/>
                </div>
  );



let container = document.getElementById("container");

ReactDOM.render(page,container);

particleground(document.getElementById('particle-container'), {
    dotColor: 'rgba(255,255,255, 0.3)',
    lineColor: 'rgba(255,255,255, 0.4)',
    parallaxMultiplier: 6.5,
    maxSpeedY: .1,
    maxSpeedX: .01
});
