import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import header from '../scripts/header.js';
import about from '../scripts/about.js';
import navbar from '../scripts/navbar.js';
import contact from '../scripts/contact.js';



var page = (    <div>
				<navbar.Navbar/>
                <header.landingDiv/>
                 <about.aboutDiv/>
                 <contact.Contact />
                </div>
			);


let container = document.getElementById("container");

ReactDOM.render(page,container);

