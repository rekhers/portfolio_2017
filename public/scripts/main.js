import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../scripts/header.js';
import about from '../scripts/about.js';
import { Navbar } from '../scripts/navbar.js';
import { Contact } from '../scripts/contact.js';



var page = (    <div>
				<Navbar/>
                <Header/>
                 <about.aboutDiv/>
                 <Contact />
                </div>
			);


let container = document.getElementById("container");

ReactDOM.render(page,container);

