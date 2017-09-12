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
						<img style={styles.pic} src='public/assets/javascript.png'/>
						<div> ES6 </div>
					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/assets/react.svg'/>
						<div> react  </div>

					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/assets/d3-outline.png'/>
						<div> d3  </div>
					</div> <br/>

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/assets/html5.png'/>
						<div> HTML5  </div>
					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/assets/sass.png'/>
						<div> sass  </div>
					</div> 

					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/assets/css3.png'/>
						<div> CSS3  </div>
					</div> 


					</div>

				</div>

				<div id="server" style={styles.skillSection}> 

					<div style={styles.sectionTitle}> Server </div>

					<div style={styles.section}>

						<div style={styles.logoText}> 
							<img style={styles.pic} src='public/assets/nodejshex.png'/>
							<div> node.js  </div>
						</div> 


					<div style={styles.logoText}> 
						<img style={styles.pic} src='public/assets/socketiologo.png'/>
						<div> socket.io  </div>
					</div> 

				</div>

				</div>

				<div id="database" style={styles.skillSection}> 
					<div style={styles.sectionTitle}> Database </div>

					<div>

							<div style={styles.logoText}> 
								<img style={styles.pic} src='public/assets/mysql.svg'/>
								<div> MySQL  </div>
							</div> 
					</div>
				</div>
			</div>)
	}
}