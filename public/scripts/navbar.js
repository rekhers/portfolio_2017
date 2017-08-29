import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export class Navbar extends React.Component {

    constructor(){
        super();
        
        var gradientTheme = 'linear-gradient(216deg, #ff8a40, #fd5068, #dc4588)';

        this.state = {background: ''}

    }

    componentDidMount(){ 

        //TODO: pull this out into its own separate plugin 
        window.addEventListener("scroll", function(){
        var divs = $(".navLink div");
        for(var id in divs){    
                window.pageYOffset > $("#" + divs[id].innerText).position().top - $("#" + divs[id].innerText).height()/2  && window.pageYOffset < $("#" + divs[id].innerText).position().top + $("#" + divs[id].innerText).height()/2 ?  $(divs[id]).addClass("selected") : $(divs[id]).removeClass("selected"); 
                }
            })        

    }
   
    render(){
        return (<div id="navbar" className="navbar"> 
            <div onClick={this.props.onClick()} ref="home" className="nameTitle">
             rekha tenjarla
             </div>
             <div className="navLink" onClick={this.props.onClick()} >
                 <div className="links" ref="about" > about </div>
                 <div className="links"> projects </div>
                 <div className="links"> contact </div>
             </div>
         </div>)
    }

}

