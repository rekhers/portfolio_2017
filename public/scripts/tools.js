import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


/*
*
* this is a second level component, that I still wanted to include in a separate file. It's called in the About component
*
*/

export class Tools extends React.Component{
	constructor(props){
		super(props);

	
	}

	componentDidMount(){
		

		$(".skill").click(function(){
			if($(this).hasClass("clicked")){
				$(this).removeClass("clicked");
			} else {
				$(this).addClass("clicked");
			}
		
	})

}

	render(){
		return( 
			<div id="tools" className="toolContainer">

				<div id="client" className="skillSection"> 
					
					<div className="sectionTitle"> Client </div>

					<div className="section">

							<div onClick={this.props.onClick()} id="javascript" className="skill clicked">   
								javascript 
							</div> 

							<div onClick={this.props.onClick()} id="react" className="skill"> 
								react  
								</div>


							<div onClick={this.props.onClick()} id="d3" className="skill"> 
								d3  
								</div>

							<div onClick={this.props.onClick()} id="html" className="skill"> 
								 HTML5 
							</div> 

							<div onClick={this.props.onClick()} id="less" className="skill"> 
								less
							</div> 

							<div onClick={this.props.onClick()} id="css" className="skill"> 
								CSS3  
							</div> 

							<div onClick={this.props.onClick()} id="wordpress" className="skill"> 
							wordpress
							</div> 
							<div onClick={this.props.onClick()} id="grunt" className="skill"> 
							grunt
							</div> 

							<div onClick={this.props.onClick()} id="babel" className="skill"> 
							babel / es6
							</div> 

							<div onClick={this.props.onClick()} id="webpack" className="skill"> 
							webpack
							</div> 
					</div>

				</div>

				<div id="server" className="skillSection"> 

					<div className="sectionTitle"> Server </div>

						<div className="section">

								<div onClick={this.props.onClick()} id="node" className="skill"> 
										 node.js 
								</div> 


							<div onClick={this.props.onClick()} id="socketio" className="skill"> 
									 socket.io  
							</div>

							<div onClick={this.props.onClick()} id="php" className="skill"> 
								PHP  
							</div>  

						</div>

				</div>

				<div id="database" className="skillSection"> 
					<div className="sectionTitle"> Database </div>

					<div className="section">

							<div id="mysql" onClick={this.props.onClick()} className="skill"> 
									MySQL 
							</div> 
					</div>
				</div>
			</div>)
	}
}