import React, { Component } from 'react';

class Footer extends Component{
  render(){
    return(
      <div className = "footer">

           <footer>
             	<div className="row">

             		<div className="col-six tab-full pull-right social">

             			<ul className="footer-social">
        			      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
        			      <li><a href="#"><i className="fa fa-behance"></i></a></li>
        			      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
        			      <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
        			      <li><a href="#"><i className="fa fa-instagram"></i></a></li>
        			   </ul>

        	      </div>

              	<div className="col-six tab-full">
        	      	<div className="copyright">
        		        	<span>© Copyright manjula 2018.</span>
        		        	<span>Design by <a href="http://www.styleshout.com/">manju.com</a></span>
        		         </div>
        	      	</div>

        	      	<div id="go-top">
        		         <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
        		      </div>

              	</div>
           </footer>
      </div>
    );
  }
}

export default Footer;
