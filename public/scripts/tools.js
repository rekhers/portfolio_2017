import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/tools.css.js';


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
		$(".section div").hover(function(e){
			$(this).css("background-color", "#FFF").css("color", "black");
		}, function(){
			$(this).css("background-color", "#333333").css("color", "#FFF");
		})
	}

	render(){
		return( 
			<div id="tools" style={styles.container}>

				<div id="client" style={styles.skillSection}> 
					
					<div style={styles.sectionTitle}> Client </div>

					<div className="section" style={styles.section}>

							<div id="javascript" style={styles.skill}>   
								javascript 
							</div> 

							<div id="react" style={styles.skill}> 
								react  
								</div>


							<div id="d3" style={styles.skill}> 
								d3  
								</div>

							<div id="html" style={styles.skill}> 
								 HTML5 
							</div> 

							<div id="less" style={styles.skill}> 
								less
							</div> 

							<div id="css" style={styles.skill}> 
								CSS3  
							</div> 

							<div id="wordpress" style={styles.skill}> 
							wordpress
							</div> 
							<div id="grunt" style={styles.skill}> 
							grunt
							</div> 

							<div id="webpack" style={styles.skill}> 
							webpack
							</div> 
					</div>

				</div>

				<div id="server" style={styles.skillSection}> 

					<div style={styles.sectionTitle}> Server </div>

						<div className="section" style={styles.section}>

								<div id="node" style={styles.skill}> 
										 node.js 
								</div> 


							<div id="socketio" style={styles.skill}> 
									 socket.io  
							</div>

							<div id="php" style={styles.skill}> 
								PHP  
							</div>  

						</div>

				</div>

				<div id="database" style={styles.skillSection}> 
					<div style={styles.sectionTitle}> Database </div>

					<div className="section" style={styles.section}>

							<div style={styles.skill}> 
									MySQL 
							</div> 
					</div>
				</div>
			</div>)
	}
}