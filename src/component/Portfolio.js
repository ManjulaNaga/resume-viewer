import React, { Component } from 'react';

class Portfolio extends Component{
  render(){
    return(
      <div className = "portfolio">
        <section id="portfolio">

          <div className="row section-intro">
            <div className="col-twelve">

              <h5>Portfolio</h5>
              <h1>Check Out Some of My Works.</h1>

              <p className="lead"> This is my portfolio session          </p>

            </div>
          </div>

          <div className="row portfolio-content">

            <div className="col-twelve">


                 <div id="folio-wrapper" className="block-1-2 block-mob-full stack">

                  <div className="bgrid folio-item">
                       <div className="item-wrap">
                        <img src="images/portfolio/myhikes2.jpg" alt="myhikes"/>
                          <a href="#modal-01" className="overlay">
                             <div className="folio-item-table">
                              <div className="folio-item-cell">
                               <h3 className="folio-title">My Hikes</h3>
                               <span className="folio-types">
                                 Hybrid Mobile App
                               </span>
                           </div>
                             </div>
                          </a>
                       </div>
                    </div>
                    <div className="bgrid folio-item">
                       <div className="item-wrap">
                        <img src="images/portfolio/mhrestAPI.jpg" alt="myhikesapi"/>
                          <a href="#modal-06" className="overlay">
                             <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">My Hikes API</h3>
                              <span className="folio-types">
                                  Node API
                              </span>
                           </div>
                             </div>
                          </a>
                       </div>
                    </div>

                    <div className="bgrid folio-item">
                       <div className="item-wrap">
                        <img src="images/portfolio/todo.jpg"alt="todo"/>
                          <a href="#modal-03" className="overlay">
                             <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">TodoList</h3>
                              <span className="folio-types">
                                  Web Design
                              </span>
                           </div>
                             </div>
                          </a>
                       </div>
                    </div>

                    <div className="bgrid folio-item">
                       <div className="item-wrap">
                        <img src="images/portfolio/restAPI.png" alt="todoapi"/>
                          <a href="#modal-04" className="overlay">
                             <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">Todo API</h3>
                              <span className="folio-types">
                                  Rest API
                              </span>
                           </div>
                             </div>
                          </a>
                       </div>
                    </div>

                    <div className="bgrid folio-item">
                       <div className="item-wrap">
                        <img src="images/portfolio/vidhya3.png" alt="vidhyardhi"/>
                        <a href="#modal-02" className="overlay">
                             <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">Vidhyardhi</h3>
                              <span className="folio-types">
                                  Web Development
                              </span>
                           </div>
                             </div>
                          </a>
                       </div>
                    </div>

                    <div className="bgrid folio-item">
                       <div className="item-wrap">
                        <img src="images/portfolio/skills.jpg" alt="react"/>
                          <a href="#modal-05" className="overlay">
                             <div className="folio-item-table">
                              <div className="folio-item-cell">
                                <h3 className="folio-title">Simple React Website</h3>
                              <span className="folio-types">
                                  React Web Development
                              </span>
                           </div>
                             </div>
                          </a>
                       </div>
                    </div>


                    <div id="modal-01" className="popup-modal slider mfp-hide">

                    <div className="media">
                      <img src="images/portfolio/modals/m-liberty.jpg" alt="" />
                    </div>

                   <div className="description-box">
                      <h4>My Hikes</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Web Development</div>
                   </div>

                     <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                     </div>

                 </div>

                 <div id="modal-02" className="popup-modal slider mfp-hide">

                    <div className="media">
                      <img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
                    </div>

                   <div className="description-box">
                      <h4>Shutterbug</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Web Design</div>
                   </div>

                     <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                     </div>

                 </div>

                 <div id="modal-03" className="popup-modal slider mfp-hide">

                    <div className="media">
                      <img src="images/portfolio/modals/m-clouds.jpg" alt="" />
                    </div>

                   <div className="description-box">
                      <h4>Clouds</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Web Design</div>
                   </div>

                     <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                     </div>

                 </div>

                 <div id="modal-04" className="popup-modal slider mfp-hide">

                    <div className="media">
                      <img src="images/portfolio/modals/m-beetle.jpg" alt="" />
                    </div>

                   <div className="description-box">
                      <h4>Beetle</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Branding</div>
                   </div>

                     <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                     </div>

                 </div>

                 <div id="modal-05" className="popup-modal slider mfp-hide">

                    <div className="media">
                      <img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
                    </div>

                   <div className="description-box">
                      <h4>Lighthouse</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Web Development</div>
                   </div>

                     <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                     </div>

                 </div>

                 <div id="modal-06" className="popup-modal slider mfp-hide">

                    <div className="media">
                      <img src="images/portfolio/modals/m-salad.jpg" alt="" />
                    </div>

                   <div className="description-box">
                      <h4>Salad</h4>
                      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

                      <div className="categories">Branding</div>
                   </div>

                     <div className="link-box">
                        <a href="http://www.behance.net">Details</a>
                      <a href="#" className="popup-modal-dismiss">Close</a>
                     </div>

                 </div>

                 </div>

            </div>

          </div>

        </section>
      </div>
    );
  }
}

export default Portfolio;
