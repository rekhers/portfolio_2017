import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';

/*
*
* Tools was added in later -- TODO: integrate it as a single file w/ inline styles
*
*/

const Bio = () => {
    return <div className="bio"> i'm a javascript developer excited about visualizing data and 
                        
                        thinking about how to do it in a way that might make the world better.
                                    
                        I've gone down the React rabbit hole this past year, and I'm a better person for it.
                                    
                        Writing code is my vehicle to exploring the things that I'm passionate about &mdash; music, language, and social justice. 
    </div> 
    
}

const Buttons = () => {
  return <div className="buttonContainer"> 
            <a href="http://www.github.com/rekhers" className="button"> <FontAwesome className="icons" name='github'/> </a> 
            <a href="https://www.linkedin.com/in/rekha-tenjarla-588a19112" className="button"> <FontAwesome className="icons" name='linkedin-square' /></a> 
            <a href="mailto:rekha.tenjarla@gmail.com" className="button"><FontAwesome className="icons" name='envelope' /> </a> 
        </div> 
}




export class About extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
  return (
    <div id="about" > 
      <div className="aboutContainer">
          <Bio /> 
          <Buttons /> 
          <div className="pointDownDiv"> 
          <div className="aboutNavText"> download my<a className="resume" href="./public/assets/resumeOct2017.pdf" download="resume_RekhaTenjarla">resume</a>and see my projects below </div> 
          <div onClick={this.props.onClick()} className="pointDown">☟</div> 
      </div>
    </div> 
    </div>
    )
}

}


