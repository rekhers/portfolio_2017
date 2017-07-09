import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import landing from '/Users/Rekha/Dev/react_project/public/scripts/landing.js';


var page = (    <div>
                <landing.landingDiv/>
                </div>
			);


let container = document.getElementById("container");

ReactDOM.render(page,container);

