var destination = document.getElementById("container");


/*
*
* Shared Elements
*
*/

class DotNavigation extends React.Component{
  render(){
    return <svg id="dots" height="140" width="50">
        <circle className="selected" cx="20" cy="10" r="7" stroke="white" fill="white"/>
       <circle cx="20" cy="40" r="6" fill="none" stroke="black" />
        <circle cx="20" cy="70" r="6" fill="none" stroke="black"/>
        <circle cx="20" cy="100" r="6" fill="none" stroke="black"/>
        <circle cx="20" cy="130" r="6" fill="none" stroke="black"/>
      </svg>
  }
}

class DownArrow extends React.Component{
  render(){
    return <div className="arrow-down"></div>;
  } 

}


var titleStyle = {
  position: 'absolute',
  left: '19%',
  top: '25%',
  fontFamily: 'Work Sans',
  color: '#FFF',
  fontSize: '8em',
  fontWeight: '400',
  opacity: '.9'

};



/*
*
* SECTIONS
*
*/

class HeaderText extends React.Component{
  render(){
    return <div style={titleStyle}> rekha tenjarla </div>;
  }

};

class About extends React.Component{
  render(){
    return <div className="name"> pageTwo </div>;
  }

};

class Particles extends React.Component{
  render(){
    return <div id="default"></div>;
  }
}


var pageOne = (<div>
               <Particles/>
               <HeaderText/>
               <DotNavigation/>
               </div>
  );

var pageTwo = (<div>
                 <Particles/>
               <About/>
               <DotNavigation/>
               </div>
  )





$(document).ready(function(){



      ReactDOM.render(
      pageOne,     
      destination);

particleground(document.getElementById('default'), {
    dotColor: 'rgba(255,255,255, 0.4)',
    lineColor: 'rgba(255,255,255, 0.4)',
    parallaxMultiplier: 6.5,
    maxSpeedY: .1,
    maxSpeedX: .01



});





});




