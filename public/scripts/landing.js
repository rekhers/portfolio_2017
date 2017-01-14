var destination = document.getElementById("container");


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





/*
*
* SECTIONS
*
*/

class HeaderText extends React.Component{
  render(){
    return <div className="name"> REKHA TENJARLA </div>;
  }

};

class About extends React.Component{
  render(){
    return <div className="name"> pageTwo </div>;
  }

};


var pageOne = (<div>
               <HeaderText/>
               <DotNavigation/>
               <DownArrow />
               </div>
  );

var pageTwo = (<div>
               <About/>
               <DotNavigation/>
                <DownArrow />
               </div>
  )



    ReactDOM.render(
    	pageOne
,    	destination);



$("#container").on("click", function(){

    ReactDOM.render(
        pageTwo,
        destination
      );

$("body").css("background", "-webkit-linear-gradient(130deg, #db4a74 10%, #ac4adc 90%)"); 

 // $( "body" ).animate({
 //     background: "-webkit-linear-gradient(30deg, #6441A5 10%, #2a0845 90%)"

 //  }, 5000, function() {
 //    // Animation complete.
 //  });

});







