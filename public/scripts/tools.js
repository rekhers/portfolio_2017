import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import styles from '../stylesheets/tools.css.js';



export class Tools extends React.Component{
	constructor(){
		super();
	}

	render(){
		return( 
			<div id="tools" style={styles.container}>

				<div id="client" style={styles.skillSection}> 
					
					<div style={styles.sectionTitle}> Client </div>

					<div style={styles.section}>

					<div style={styles.logoText}>   
						<img style={styles.pic} src='public/javascript.png'/>
						<div> ES6 </div>
					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/react.svg'/>
						<div> react  </div>

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

				<div id="server" style={styles.skillSection}> 

					<div style={styles.sectionTitle}> Server </div>

					<div style={styles.section}>

						<div style={styles.logoText}> 
							<img style={styles.pic} src='public/nodejshex.png'/>
							<div> Node  </div>
						</div> 


					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/socketiologo.png'/>
						<div> socket.io  </div>
					</div> 

				</div>

				</div>

				<div id="database" style={styles.skillSection}> 
					<div style={styles.sectionTitle}> Database </div>

					<div>

							<div style={styles.logoText}> 
								<img style={styles.pic} src='public/mysql.svg'/>
								<div> MySql  </div>
							</div> 
					</div>
				</div>
			</div>)
	}
}