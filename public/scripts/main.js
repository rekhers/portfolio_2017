import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../scripts/header.js';
import { About } from '../scripts/about.js';
import { Navbar } from '../scripts/navbar.js';
import { Contact } from '../scripts/contact.js';
const scroll = require('smoothscroll-polyfill').polyfill();


class Container extends React.Component{
	constructor(){
		super();
	}

	handleClick(event){
        document.querySelector("#" + event.target.innerText).scrollIntoView({ behavior: 'smooth' });
    }


	render(){
		return(<div>
				<Navbar onClick={() => this.handleClick}/>
                <Header/>
                 <About/>
                 <Contact />
                </div>)
	}

}



let container = document.getElementById("container");

ReactDOM.render(<Container/>, container);

