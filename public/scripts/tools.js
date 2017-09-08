import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/tools.css.js';



export class Tools extends React.Component{
	constructor(){
		super();
	}

	render(){
		return( <div id="tools" style={styles.container}>

				<div id="client" style={styles.styleSection}> 
					<div style={styles.sectionTitle}> Client </div>

					<div style={styles.section}>

					<div style={styles.logoText}>   
						<img style={styles.pic} src='public/javascript.png'/>
						<div> Javascript </div>
					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/react.svg'/>
						<div> React  </div>

					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/d3-outline.png'/>
						<div> d3  </div>
					</div> <br/>

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/html5.png'/>
						<div> HTML5  </div>
					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/sass.png'/>
						<div> SASS  </div>
					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/css3.png'/>
						<div> CSS3  </div>
					</div> 


					</div>

				</div>

				<div id="server" style={styles.styleSection}> 
					<div style={styles.sectionTitle}> Server </div>

					<div style={styles.section}>

						<div style={styles.logoText}> 
							<img style={styles.pic} src='public/node.jpeg'/>
							<div> Node / Express  </div>
						</div> 


					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/socketio.png'/>
						<div> socket.io  </div>
					</div> 


					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/php.png'/>
						<div> PHP  </div>
					</div> 

				</div>

				</div>

				<div id="database" style={styles.styleSection}> 
					<div style={styles.sectionTitle}> Database </div>

					<div style={styles.section}>

							<div style={styles.logoText}> 
								<img style={styles.pic} src='public/mysql.svg'/>
								<div> MySql  </div>
							</div> 
					</div>
				</div>
			</div>)
	}
}