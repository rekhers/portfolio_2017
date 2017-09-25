import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import { Tools } from '../scripts/tools.js';
import _ from 'underscore';



class ProjectDiv extends React.Component{

	constructor(props){
		super(props);

		//list of projects and associated skills, with inherited props list of skills that reflect user's selection
		this.state = {skills: this.props.skills, projects: {toptracks: {skills: ["javascript", "react", "webpack", "html", "css"], src: "public/assets/toptracks.png", description: " Lists a user's top scrobbled tracks over different periods of time, built with React and the Last.fm API. In the process of adding authentication.", style: {width: "14em"}}, tweets:{skills:["javascript", "html", "css", "socketio"], src: "public/assets/tweets.png", description: "An ongoing project that uses the Twitter API, Google Maps API, and the Natural Language Toolkit to visualize, filter, and analyze linguistic trends. This app was born out of a final project for a college computational linguistics course, in which I analyzed twitter corpora to compare whether the new england vernacular 'wicked' was being used as an adjective or adverb in any given context. 'That party was wicked' (adj) vs. 'She's wicked smart' (adv).",  style: {width: "14em"}}, d3lifeglobe: {skills: ["javascript", "d3", "html", "css", "node"], src: "public/assets/d3lifeglobe.png",  description: "An animated d3 globe that rotates to a given coordinate and projects a path between the places that I've lived.",  style: {width: "15em"}}, previousprofile: {skills: ["javascript", "d3", "grunt", "less", "css", "html", "node"], src: "public/assets/previousprofile.png",  description: "My previous profile -- I'm proud of some of the d3 data visualizations that I built for it and not so proud of the lack of responsiveness.", style: {width: "12em"}}, thisprofile: {skills: ["react","webpack", "css", "less", "html", "node"], src: "",  description: "This single page app was built with react which allowed me to flexibly integrate this filter function class component with other pure component sections. Building this app tested my commitment to inline styles with React. Since many of these components require animation that I'm accustomed to using pseudo selectors and css for, I opted to ", style: {width: "10rem", color:"#FFF", height: "10rem", padding: "3rem", backgroundColor: "#333333", border: "1px solid #F25F5C"}, text:"this profile :)", display: "flex", justifyContent: "center", flexDirection: "row", alignItems: "center"}}}

	}

	componentDidMount(){
		this.filteredProjects();
	}

	componentWillReceiveProps(props){
		this.setState({skills: props.skills}, function(){
			this.filteredProjects();
		})
	}



	/*
	*
	* filter logic that updates selected skills and passes it up to its parent component 
	*
	*/
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

		console.log(skills);

		console.log(projects);

		if(projects.length > 0) {
 
			return (<div id="project-container" className="project-container">
				{Object.keys(projects).map(function(key, i){ 
					if(projects[key].src){
	  					return (<div key={i} className="picHolder">
	  							<img className="pic" src={projects[key].src} style={projects[key].style}/>
	  							<div className="description"> 
	  								<div className="descText"> {projects[key].description} </div>
	  									<div className="skillTags"> 
	  									{Object.keys(_.intersection(projects[key].skills, skills)).map(function(k, i){
	  										return  <div className="tag" key={i}> 
	  											{_.intersection(projects[key].skills, skills)[k]} </div> 
	  									}
	  									)}
	  									</div> 
	  							</div>
								</div>)
	  				} else { 
	  					 return (<div key={i} className="picHolder">
	  							<div style={projects[key].style}> {projects[key].text} </div> 
	  						<div className="description"> 
	  								<div className="descText"> {projects[key].description} </div>
	  									<div className="skillTags"> 
	  									{Object.keys(_.intersection(projects[key].skills, skills)).map(function(k, i){
	  										return  <div className="tag" key={i}> 
	  											{_.intersection(projects[key].skills, skills)[k]} </div> 
	  									}
	  									)}
	  									</div> 
	  							</div>
								</div>)
	  				}
					}
	  			)}
  			</div>)
		}else{
			return 	(<div className="project-container">
			<div className="chooseText"> Choose some skills to see how I've used them! </div> 
			</div>)

		}

	} else{
			return (<div className="project-container">
			<div className="chooseText"> Choose some skills from above to see how I've used them! </div> 
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


