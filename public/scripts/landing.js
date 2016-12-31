var destination = document.getElementById("container");

class Allo extends React.Component{
  	render(){
  		return <div> {this.props.children} </div>;
  	}
  }


class Greeting extends React.Component{
	  render(){
	    return <h1>Hello, {this.props.name}</h1>;
	  }
}


class headerText extends React.Component{
	render(){
		return 
	}
}; 

class Mountain extends React.Component{
    render() {
        return <div><img src={'./public/bw-resized.jpg'} className="subway"/></div>;
    }
};


class HeaderText extends React.Component{
	render(){
		return <div><div className="name"><div id="firstName">rekha</div><div id="lastName">tenjarla</div> </div> <div className="links"> <div id="abt">ABOUT ME</div> <div id="projects">PROJECTS</div><div id="contact">CONTACT</div></div></div>;
	}

};


    ReactDOM.render(
    	<div>
    	<Mountain/>  
    	    	<HeaderText/>    	
  	
    	 </div>
,    	destination);