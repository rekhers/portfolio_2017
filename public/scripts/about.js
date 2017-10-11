import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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




export class About extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
  return (
    <div id="about" > 
      <div className="aboutContainer">
          <Bio /> 
          <div className="pointDownDiv"> 
          <div className="aboutNavText"> download my resume and see my projects below </div> 
          <div onClick={this.props.onClick()} className="pointDown">☟</div> 
      </div>
    </div> 
    </div>
    )
}

}


