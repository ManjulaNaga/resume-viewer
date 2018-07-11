import React, { Component } from 'react';

class Resume extends Component{
  render(){
    return(
      <div className = "resume">
        <section id="resume" className="grey-section">

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>Resume</h5>
              <h1>More of my credentials.</h1>

              <p className="lead">Lorem ipsum Do commodo in proident enim in dolor cupidatat adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem ipsum Consectetur ut in in eu do.</p>

            </div>
          </div>

          <div className="row resume-timeline">

            <div className="col-twelve resume-header">

              <h2>Work Experience</h2>

            </div>

            <div className="col-twelve">

              <div className="timeline-wrap">

                <div className="timeline-block">
                    <div className="timeline-ico">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <div className="timeline-header">
                      <h3>Software Engineer</h3>
                      <p>January, 2012 - June,2014</p>
                    </div>
                    <div className="timeline-content">
                      <h4>Tata Consultancy Services</h4>
                      <p>As a production support executive, I understood working of  different applications supported by our team.</p></div>
                </div>

                <div className="timeline-block">
                    <div className="timeline-ico">
                      <i className="fa fa-graduation-cap"></i>
                    </div>
                    <div className="timeline-header">
                      <h3>Teaching Assistant</h3>
                      <p>January, 2017 - April, 2017</p>
                    </div>
                    <div className="timeline-content">
                      <h4>California State University,Hayward,CA </h4>
                      <p>Assisted professor in evaluating the assignments, mid term papersand listing the grades and deliver the data to the professor.
                      In the mean while I clear some of the issues faced by the students udring the course work. </p></div>
                </div>
              </div>

            </div>

          </div>

          <div className="row resume-timeline">

            <div className="col-twelve resume-header"><h2>Education</h2></div>

            <div className="col-twelve">

              <div className="timeline-wrap">
                  <div className="timeline-block">
                      <div className="timeline-ico">
                        <i className="fa fa-briefcase"></i>
                      </div>
                      <div className="timeline-header">
                        <h3>Master Degree</h3>
                        <p>January 2016 - March 2018</p>
                      </div>
                      <div className="timeline-content">
                        <h4>California State University,Hayward,CA </h4>
                        <p>It was good exposure to Masters enviroment here.</p></div>
                </div>

                <div className="timeline-block">
                    <div className="timeline-ico">
                        <i className="fa fa-briefcase"></i>
                    </div>
                    <div className ="timeline-header">
                        <h3>Bachelor Degree</h3>
                        <p>Sept 2007 - June 2011</p>
                    </div>
                    <div className="timeline-content">
                        <h4>Jawaharlal Nehru Technologial  University</h4>
                        <p>I did Btech here</p></div>
                </div>

              </div>

            </div>

          </div>

        </section>
      </div>
    );
  }
}

export default Resume;
