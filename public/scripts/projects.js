import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


export class Projects extends React.Component{

	constructor(){
		super();
	// 	this.state = { overlay: { 
	// 		position: 'absolute',
	// 		top: '0',
	// 		left: '0',
	// 		width: '100%',
	// 		height: '100%',
	// 		backgroundColor: 'black',
	// 		zIndex: '50',
	// 		opacity: '.5',
	// 		overflowx:'hidden'
	// 	}
	// }
	}



	render(){
		return (<div className="projects" id="projects"> 


		<div className="container"> 


					<div className="picHolderMedium"> 
						<img className="mediumpic" src='public/assets/toptracks.png'/>
						<div className="overlay"> 
							<div className="text">TOP TRACKS <br/> <br/> Lists a user's top scrobbled tracks over different periods of time, built with
							 React and the Last.fm API. In the process of adding authentication. </div>
						 </div> 
					</div> 

					
					<div className="picHolder">  
						<img className="pic"src="public/assets/tweets.png" />
				<div className="overlay"> 

						<div className="text">WICKED TWITTA <br/> <br/>
							An ongoing project that uses the Twitter API, Google Maps API, and the Natural Language Toolkit to visualize, filter, and analyze linguistic trends. 
							This app was born out of a final project for a college computational linguistics course, in which I analyzed twitter corpora to compare whether the new england vernacular "wicked" 
							was being used as an adjective or adverb in any given context. "That party was wicked" (adj) vs. "She's wicked smart" (adv).  <a href="http://www.github.com/rekhers"> github </a>
						</div>

					</div>

					</div> 

					
					<div className="picHolderMedium">  
						<img className="mediumpic" src="public/assets/tweets-usmap.png" />
						<div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
							 React and the Last.fm API </div>
					</div> 


					<div className="picHolder"> 
						<img className="pic" src='public/assets/d3-life-globe.png'/>
						<div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
							 React and the Last.fm API </div>
					</div> 


					<div className="picHolderThin">  
						<img className="thinpic" src='public/assets/previousprofile.png'/>
						<div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
							 React and the Last.fm API </div>
					</div> 

					<div className="picHolderThin">  
						<img className="thinpic" src='public/assets/txchoropleth.png'/>
						<div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
							 React and the Last.fm API </div>

					</div> 


					<div className="picHolderMedium">  
						<img className="mediumpic" src='public/assets/wsumaptooltip.png'/>
						<div className="overlay"> <div className="text">Top Tracks -- Lists a user's top scrobbled tracks over different periods of time, built with
							 React and the Last.fm API </div></div> 

					</div> 

		</div>

		</div>)

	}
}

