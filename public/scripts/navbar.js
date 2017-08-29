import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export class Navbar extends React.Component {

    constructor(){
        super();
        
        var gradientTheme = 'linear-gradient(216deg, #ff8a40, #fd5068, #dc4588)';

        this.state = {background: '', textStyle:  {
              fontFamily: 'Montserrat',
              fontSize: '1.8em',
              background: gradientTheme,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              cursor: "pointer"
            }, gradientTheme: gradientTheme }

    }

    componentDidMount(){

        var that = this;
    //     window.addEventListener("scroll", function(){
    //      that.setState({textStyle: {
    //         fontFamily: 'Montserrat',
    //           fontSize: '1.8em',
    //           background: 'linear-gradient(80deg, #ff8a40, #dc4588)',
    //           WebkitBackgroundClip: 'text',
    //           WebkitTextFillColor: 'transparent',
    //           cursor: "pointer"
    //         }})
    //     })
    // }

 
       
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

