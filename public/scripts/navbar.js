import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';


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

        var d = $(".big-links");

        var divs = [d[0], d[1]];

        var elem = document.getElementsByClassName("nameTitle")[0];



        window.addEventListener("scroll", function(error){


            /*
            *
            * In a world where I had made the component sizes all the same this would have worked for all the cases. But alas.
            * 
            */
            for(var id in divs){   
                console.log(id);
                    window.pageYOffset > $("#" + divs[id].innerText).position().top - $("#" + divs[id].innerText).height() / 10 && window.pageYOffset < $("#" + divs[id].innerText).position().top +  $("#" + divs[id].innerText).height() - $("#" + divs[id].innerText).height() / 5? $(divs[id]).addClass("selected") : $(divs[id]).removeClass("selected"); 
                    }


            window.pageYOffset < $("#about").position().top - $("#about").height()/10 ? $('.nameTitle').addClass("nameSelect") : $('.nameTitle').removeClass("nameSelect"); 
                }) 


    }

    componentDidMount(){ 
        this.scrollNavigation();
    }
   

    render(){
        return (<div id="navbar" className="navbar"> 
                <div onClick={this.props.onClick()} ref="home" className="nameTitle">
                
                <img className="navPic" src='public/assets/circle_face.gif'/>

             <div className="nameText"> 
                <div> rekha tenjarla </div>

             </div> 
             </div>
             <div className="navLink" onClick={this.props.onClick()}>
                 <div className="links big-links" ref="about" > about </div>
                 <div className="links big-links"> projects </div>


               <div className="links hamburger"> ☰ </div>

             </div>
         </div>)
    }

}

