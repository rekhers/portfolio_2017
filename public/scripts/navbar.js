import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


/*
*
*   Styles for this class are in a less file which are compiled down by Grunt -- to handle gradient and scroll animations
*
*/
export class Navbar extends React.Component {

    constructor(){
        super();
        
        this.gradientTheme = 'linear-gradient(216deg, #ff8a40, #fd5068, #dc4588)';

        }


    //TODO: pull this out into its own separate plugin 
    scrollNavigation(){
        var that = this;

        var d = $(".navLink").children();
        var divs = [d[0], d[1], d[2]];

        var elem = document.getElementsByClassName("nameTitle")[0];



        window.addEventListener("scroll", function(error){



            for(var id in divs){   
               var old =  $(divs[id]).css('background')
               console.log("name:");
               console.log(name);

                    window.pageYOffset > $("#" + divs[id].innerText).position().top - $("#" + divs[id].innerText).height()/3  && window.pageYOffset < $("#" + divs[id].innerText).position().top + $("#" + divs[id].innerText).height()/3 ?  $(divs[id]).addClass("selected") : $(divs[id]).removeClass("selected"); 
                    }


                    if(window.pageYOffset > $("#projects").position().top + $("#projects").height()/2.5){
                        console.log("getting here?");
                         $(that.refs.contact).addClass("selected");
                    } else {
                         $(that.refs.contact).removeClass("selected");

                    }

                }) 


    }

    componentDidMount(){ 
        this.scrollNavigation();
    }
   

    render(){
        return (<div id="navbar" className="navbar"> 
            <div onClick={this.props.onClick()} ref="home" className="nameTitle">
             rekha tenjarla
             </div>
             <div className="navLink" onClick={this.props.onClick()}>
                 <div className="links" ref="about" > about </div>
                 <div className="links"> projects </div>
                 <div ref="contact" className="links contact"> contact </div>
             </div>
         </div>)
    }

}

