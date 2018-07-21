import React, { Component } from 'react';

class Intro extends Component{
  render(){
    return(

<div className = "intro">
  <section id="intro">
   	<div className="intro-content">
   		<div className="row">

   			<div className="col-twelve">

	   			<h5>Hello..</h5>
	   			<h1>I'm Naga Manjula Koutha</h1>

	   			<p className="intro-position">
            <span>| Full Stack Developer |</span>
	   				<span>| Front-end Developer |</span>
	   				<span>| UI/UX Designer |</span>
	   			</p>
	   			<a className="button stroke smoothscroll" href="#about" title="">
            More About Me
          </a>
	   		</div>
   		</div>
   	</div>

   	<ul className="intro-social">
         <li><a href="#"><i className="fa fa-facebook"></i></a></li>
         <li><a href="#"><i className="fa fa-behance"></i></a></li>
         <li><a href="#"><i className="fa fa-twitter"></i></a></li>
         <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
         <li><a href="#"><i className="fa fa-instagram"></i></a></li>
      </ul>
    </section>
      </div>
);
}
}
export default Intro;
