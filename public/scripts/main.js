import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../scripts/header.js';
import { About } from '../scripts/about.js';
import { Navbar } from '../scripts/navbar.js';
import { Projects } from '../scripts/projects.js';
import { Contact } from '../scripts/contact.js';
import Favicon from 'react-favicon';
import $ from 'jquery';

const scroll = require('smoothscroll-polyfill').polyfill();


//TODO: * fix navbar scroll now that we're back at 100% height 
//		* set favicon to circle face pic
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
		else if(event.target.innerText =="☟"){
			document.getElementById("projects").scrollIntoView({behavior:'smooth'});
		}
		else{
        	document.querySelector("#" + event.target.innerText).scrollIntoView({ behavior: 'smooth' });
    	}

    }


	render(){
		return(<div>
			    <Favicon url="favicon.ico" />
				<Navbar onClick={() => this.handleClick}/>
                <Header onClick={() => this.handleClick}/>
                 <About onClick={() => this.handleClick}/>
                 <Projects/>
                </div>)
	}

}



let container = document.getElementById("container");

ReactDOM.render(<Container/>, container);

