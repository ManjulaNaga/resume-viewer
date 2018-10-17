import React, { Component } from 'react';

 class About extends Component{
   constructor(props) {
     super(props);

     this.state = {
       uploadUrl: '',
     };
   }
   handleDownloadFile = (event) => {
     event.preventDefault();
     console.log("in handle download");
   }
/*
     const data = new FormData();
     data.append('file', event.target.files);
     data.append('name', 'some value user types');
     data.append('description', 'some value user types');

     get('http://localhost:8000/upload', {
      method: 'GET',
      body: data,
     }).then((response) => {
      response.json().then((body) => {
        console.log("downloaded resume");
      });
    });
   }
*/
  render(){
  //  console.log(this.props);
    if(this.props.data){
            var name = this.props.data.name;
            console.log(this.props.data);
    }


    return(
      <div className = "about">
        <section id="about">

         <div className="row section-intro">
           <div className="col-twelve">
               <h5>About</h5>
               <h1>Let me introduce myself.</h1>
               <div className="intro-info">
                 <img src="images/manju.png"  alt="Profile Picture"/>
                  <p className="lead"></p>
                </div>
           </div>
         </div>

         <div className="row about-content">
           <div className="col-six tab-full">
             <h3>Profile</h3>
             <ul className="info-list">
                 <li>
                   <strong>Fullname:</strong>
                   <span>{name}</span>
                 </li>

                 <li>
                   <strong>Job:</strong>
                   <span>Fresh Graduate</span>
                 </li>

                 <li>
                   <strong>Email:</strong>
                   <span>cnagamanju@gmail.com</span>
                 </li>
             </ul>
           </div>

           <div className="col-six tab-full">
             <h3>Skills</h3>
             <p>Here are my skill</p>

             <ul className="skill-bars">
               <li>
                <div className="progress percent90"><span>90%</span></div>
                <strong>JAVASCRIPT</strong>
               </li>
               <li>
                <div className="progress percent75"><span>75%</span></div>
                <strong>REACT JS</strong>
               </li>
               <li>
                <div className="progress percent85"><span>85%</span></div>
                <strong>NODE JS</strong>
               </li>
               <li>
                <div className="progress percent75"><span>75%</span></div>
                <strong>REST API</strong>
               </li>
                <li>
                 <div className="progress percent90"><span>90%</span></div>
                 <strong>HTML5</strong>
                </li>
                <li>
                 <div className="progress percent98 "><span>98%</span></div>
                 <strong>CSS3</strong>
                </li>
                <li>
                 <div className="progress percent90"><span>90%</span></div>
                 <strong>JQuery</strong>
                </li>
                <li>
                 <div className="progress percent95"><span>95%</span></div>
                 <strong>PHP</strong>
                </li>
                <li>
                 <div className="progress percent75"><span>75%</span></div>
                 <strong>JAVA</strong>
                </li>

                <li>
                 <div className="progress percent75"><span>75%</span></div>
                 <strong>C++</strong>
                </li>
                <li>
                 <div className="progress percent75"><span>75%</span></div>
                 <strong>CORDOVA</strong>
                </li>

                <li>
                 <div className="progress percent75"><span>75%</span></div>
                 <strong>MONGO DB</strong>
                </li>
                <li>
                 <div className="progress percent90"><span>90%</span></div>
                 <strong>SQL</strong>
                </li>
                <li>
                 <div className="progress percent90"><span>90%</span></div>
                 <strong>MYSQL</strong>
                </li>
                <li>
                 <div className="progress percent70"><span>70%</span></div>
                 <strong>Mocha</strong>
                </li>
                <li>
                 <div className="progress percent60"><span>60%</span></div>
                 <strong>Chai</strong>
                </li>
                <li>
                 <div className="progress percent70"><span>70%</span></div>
                 <strong>Neo4j</strong>
                </li>
                <li>
                 <div className="progress percent60"><span>60%</span></div>
                 <strong>D3.JS</strong>
                </li>
             </ul>

           </div>
         </div>

         <div className="row button-section">
           <div className="col-twelve">
             <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
             <button className="button button-primary" onClick ={this.handleDownloadFile.bind(this)}>Download CV</button>
             <a href = "NagaManjula.pdf" download>Download</a>
           </div>
         </div>

        </section>
            </div>
    );
  }
}

export default About;
