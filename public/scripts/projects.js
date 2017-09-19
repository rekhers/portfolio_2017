import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Tools } from '../scripts/tools.js';
import _ from 'underscore';



class ProjectDiv extends React.Component{

	constructor(props){
		super(props);

		//list of projects and associated skills, with inherited props list of skills that reflect user's selection
		this.state = {skills: this.props.skills, projects: {toptracks: {skills: ["javascript", "react", "webpack", "html", "css"], src: "public/assets/toptracks.png", description: " Lists a user's top scrobbled tracks over different periods of time, built with React and the Last.fm API. In the process of adding authentication."}, tweets:{skills:["javascript", "html", "css", "socketio"], src: "public/assets/tweets.png", description: "tweets hehe"}, d3lifeglobe: {skills: ["javascript", "d3", "html", "css", "node"], src: "public/assets/d3lifeglobe.png",  description: "tweets hehe"}, previousprofile: {skills: ["javascript", "d3", "grunt", "less", "css", "html", "node"], src: "public/assets/previousprofile.png",  description: "tweets hehe"}}}

	}

	componentDidMount(){
		this.filteredProjects();
	}

	componentWillReceiveProps(props){
		this.setState({skills: props.skills}, function(){
			this.filteredProjects();
		})
	}

	filteredProjects(){

		var skills = _.values(this.state.skills);
		var obj = this.state.projects;
		var out = [];

		for(var key in obj){
			console.log(_.intersection(obj[key].skills, skills));
			if(_.intersection(obj[key].skills, skills).length > 0){
				out.push(obj[key]);
			}
		}

		this.setState({filteredProjects: out})


	}


	render(){

		var that = this;

		if(this.state.filteredProjects){

		const skills = _.values(this.state.skills);
		const projects = this.state.filteredProjects;
		if(projects.length > 0) {
 
			return (<div className="project-container">
				 <div> Choose some skills from above to see how I've used them! </div> 
				{Object.keys(projects).map(function(key, i){ 
	  					return (<div key={i} className="picHolder">
	  							<img className="pic" src={projects[key].src}/>
	  							<div className="description"> {projects[key].description}</div>
								</div>)
	  			})}
  			</div>)
		}else{
			return 	(<div className="project-container">
			<div> Choose some skills from above to see how I've used them! </div> 
			</div>)

		}

	} else{
			return (<div className="project-container">
			<div> Choose some skills from above to see how I've used them! </div> 
			</div>)
		}
}
}


export class Projects extends React.Component{

	constructor(){
		super()
		this.state = {skills: ["d3"]} 
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e){
	var id = e.target.id;
	var skills = this.state.skills;

	if(_.contains(skills, id)){
		skills = _.without(skills, id);

	} else {
		skills.push(id);
	}

	console.log("current skills");
	console.log(skills);

	this.setState({skills: skills})


	}

	render(){
	return (
		<div id="projects">
			<Tools onClick={() => this.handleClick} />
			<ProjectDiv skills={this.state.skills} />
		</div>
		)
	}
}



	// <div className="javascript react webpack" className="picHolderMedium"> 
	// 					<img className="mediumpic" src='public/assets/toptracks.png'/>
	// 					<div className="overlay">  
	// 						<div className="text">TOP TRACKS <br/> <br/> Lists a user's top scrobbled tracks over different periods of time, built with
	// 						 React and the Last.fm API. In the process of adding authentication. </div>
	// 					 </div> 
	// 				</div> 

					
	// 				<div "javascript socketio node"  className="picHolder">  
	// 					<img className="pic"src="public/assets/tweets.png" />
	// 			<div className="overlay"> 

	// 					<div className="text">WICKED TWITTA <br/> <br/>
	// 						An ongoing project that uses the Twitter API, Google Maps API, and the Natural Language Toolkit to visualize, filter, and analyze linguistic trends. 
	// 						This app was born out of a final project for a college computational linguistics course, in which I analyzed twitter corpora to compare whether the new england vernacular "wicked" 
	// 						was being used as an adjective or adverb in any given context. "That party was wicked" (adj) vs. "She's wicked smart" (adv).  <a href="http://www.github.com/rekhers"> github </a>
	// 					</div>

	// 				</div>

	// 				</div> 

					
	// 				<div className="picHolderMedium">  
	// 					<img className="mediumpic" src="public/assets/tweets-usmap.png" />
	// 					<div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
	// 						 React and the Last.fm API </div>
	// 				</div> 


	// 				<div className="picHolder"> 
	// 					<img className="pic" src='public/assets/d3-life-globe.png'/>
	// 					<div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
	// 						 React and the Last.fm API </div>
	// 				</div> 


	// 				<div className="picHolderThin">  
	// 					<img className="thinpic" src='public/assets/previousprofile.png'/>
	// 					<div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
	// 						 React and the Last.fm API </div>
	// 				</div> 

	// 				<div className="picHolderThin">  
	// 					<img className="thinpic" src='public/assets/txchoropleth.png'/>
	// 					<div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
	// 						 React and the Last.fm API </div>

	// 				</div> 


	// 				<div className="picHolderMedium">  
	// 					<img className="mediumpic" src='public/assets/wsumaptooltip.png'/>
	// 					<div className="overlay"> <div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
	// 						 React and the Last.fm API </div></div> 

	// 				</div> 

