import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MediaQuery from 'react-responsive';

export class Header extends React.Component{
    constructor(props){
      super(props);

    }


 handleClick(){

 }

render(){
    return (
    <div id="home" className="headerContainer">

      <div className="text">
        
      <div> hey, i'm <span className="name">rekha</span></div>
      <div className="titleBlock">
      <div> linguist,  </div> 
      <div > developer, </div>
      <div > data visualizer</div> 
     </div>
        </div> 



         <div onClick={this.props.onClick()} id="chevronHolder">
            <div className="blue chevron"> </div>
            <div className="red chevron"> </div>
            <div className="yellow chevron"> </div>
          </div> 
    </div> 
      );
}

}















