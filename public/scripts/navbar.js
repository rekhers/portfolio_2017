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


            console.log(d);
            console.log(divs);

            /*
            *
            * In a world where I had made the component sizes all the same this would have worked for all the cases. But alas.
            * 
            */
            for(var id in divs){   
                console.log(id);
                    window.pageYOffset > $("#" + divs[id].innerText).position().top - $("#" + divs[id].innerText).height()/3 && window.pageYOffset < $("#" + divs[id].innerText).position().top + $("#" + divs[id].innerText).height()/4 ?  $(divs[id]).addClass("selected") : $(divs[id]).removeClass("selected"); 
                    }


             /*
            *
            * Special cases handle the less than half page contact component and the highlighting of the name div  
            * 
            */

            // window.pageYOffset > $("#about").position().top -  $("#about").height() && window.pageYOffset < $("#projects").position().top - $("#about").height()/3 ? $(that.refs.about).addClass("selected") : $(that.refs.about).removeClass("selected");

            //  window.pageYOffset > $("#projects").position().top + $("#projects").height() / 3 ? $(that.refs.contact).addClass("selected") :$(that.refs.contact).removeClass("selected");

            window.pageYOffset < $("#about").position().top - $("#about").position().top/5 ? $(".nameTitle").addClass("nameSelect") : $(".nameTitle").removeClass("nameSelect");
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
                 <div className="links" ref="about" > about </div>
                 <div className="links"> projects </div>
             </div>
         </div>)
    }

}

