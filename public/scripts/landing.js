var landing = document.getElementById("landing");
var about = document.getElementById("about");

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
  left: '24%',
  top: '23%',
  fontFamily: 'Roboto',
  letterSpacing: '5px',
  fontSize: '9em',
  fontWeight: '400',
  textAlign:'center',
  WebkitTextStroke: '2px #FFF',
  WebkitTextFillColor: 'transparent' 
}

var byline = {
  position: 'absolute',
  left: '29%',
  top: '45%',
  fontFamily: 'Roboto',
  letterSpacing: '5px',
  fontSize: '2.7em',
  fontWeight: '400',
  color: 'rgba(255,255,255, 0.9)'
}

var bold = {
   fontWeight: '600'
}

var italic = {
  letterSpacing: '2px',
  fontWeight: '300'
}
  

var arrowStyle = {
  WebkitTextStroke: '2px #FFF',
  WebkitTextFillColor: 'transparent',
  fontFamily: 'Raleway',

}


var aboutHeader = {
  fontFamily: 'Roboto',
  fontSize: '3em',
  fontWeight: '300',
  color: '#848484',
  backgroundColor: '#f5f5f5',
  paddingLeft:'5%',
  paddingTop:'2%',
  paddingBottom:'2%'
}

var spacer = {
  backgroundColor: "#FFF",
  height: "5%"
}

var triangle = {
  width: '0', 
  height: '0', 
  borderLeft: '30px solid transparent',
  borderRight: '30px solid transparent',
  borderTop: '30px solid #FFF',
  'marginLeft': '50%',
  'position':'absolute'

}

var background = {
  backgroundColor: "#f5f5f5",
}



var word1 = {
        WebkitTextStroke: '1px #CB08E6',
    WebkitTextFillColor:'#CB08E6',
    fontFamily: 'Roboto Slab'

}


var word2 = {
    WebkitTextStroke: '1px #DDFD04',
    WebkitTextFillColor: '#DDFD04',
    fontFamily: 'Roboto Slab'
}


var word3 = {
  WebkitTextStroke: '1px #FFE304',
  WebkitTextFillColor: '#FFE304',
  fontFamily: 'Roboto Slab'
}


// WebkitLinearGradient(left, #6819e8 0%,#7437d0 35%,#615fde 68%,#6980f2 100%)', 


/*
*
* SECTIONS
*
*/

class HeaderText extends React.Component{
  render(){
    return  (<div> 
      <div style={titleStyle}> rekha tenjarla </div>
       <div style={byline}> <span style={bold}> linguist </span> turned <span style={bold}> web developer </span></div>
      </div>);
  }
};


class Particles extends React.Component{
  render(){
    return <div className="section" id="particle-container"></div>;
  }
}

class About extends React.Component{
  render(){
    return <div style={aboutHeader}> I'm self-taught developer with a love for language, social justice, and music. </div>;
  }

};


class Spacer extends React.Component{
  render(){
    return <div><div style={spacer}> </div><div style={triangle}></div> </div>;
  }
}

class Background extends React.Component{
  render(){
    return <div className="section" style={background}> </div>;
  }
}





var pageOne = (<div>
               <Particles/>
               <HeaderText/>
               <DotNavigation/>
                <About/>
                <Spacer/>
                 <Background/>

               </div>
  );



$(document).ready(function(){

ReactDOM.render(pageOne,landing);



particleground(document.getElementById('particle-container'), {
    dotColor: 'rgba(255,255,255, 0.3)',
    lineColor: 'rgba(255,255,255, 0.4)',
    parallaxMultiplier: 6.5,
    maxSpeedY: .1,
    maxSpeedX: .01





});




});




