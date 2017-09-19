import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../scripts/header.js';
import { About } from '../scripts/about.js';
import { Navbar } from '../scripts/navbar.js';
import { Projects } from '../scripts/projects.js';
import { Contact } from '../scripts/contact.js';

import $ from 'jquery';
const scroll = require('smoothscroll-polyfill').polyfill();


class Container extends React.Component{
	
	constructor(){
		super();
	}

	componentDidMount(){	
		
	}

	handleClick(event){

		if(event.target.innerText == "rekha tenjarla"){
			 document.querySelector("#home").scrollIntoView({ behavior: 'smooth' });
		} else if(event.target.innerText == "about" || event.target.innerText == ''){
			 window.scroll({ top: 550, left: 0, behavior: 'smooth'});
		} else if(event.target.innerText =="☝︎"){
			document.getElementById("home").scrollIntoView({behavior:'smooth'});
		}
		else{
        	document.querySelector("#" + event.target.innerText).scrollIntoView({ behavior: 'smooth' });
    	}

    }


	render(){
		return(<div>
				<Navbar onClick={() => this.handleClick}/>
                <Header onClick={() => this.handleClick}/>
                 <About/>
                 <Projects/>
                 <Contact onClick={() => this.handleClick}/>
                </div>)
	}

}



let container = document.getElementById("container");

ReactDOM.render(<Container/>, container);

