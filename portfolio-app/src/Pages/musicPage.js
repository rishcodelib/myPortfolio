import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import MusicEntity from '../Entity/musicEntity';
import MusicItem from '../Components/musicComponent/musicItem';

export class MusicPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: MusicEntity.getMusicVideos(),
      loading: false
    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Music | Rishabh Aggarwal</title>
        </Helmet>
        <section className="project-card container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Music Projects</h1>
              <h6 className="text-center codewithRishhiii">
                Partnered By <b><a href="https://www.youtube.com/@rishhiiimusic" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '> RishhiiiMusic <i className="fa-brands fa-youtube fa-xl text-danger"></i></a></b>
              </h6>
              <p className="text-center">These projects are purely for personal knowledge enhancement and proof of concept.</p>
            </div>
          </div>
          <hr className="hr-divider h-3rem"></hr>
          <div className="project-card ">
            <div className="row">
              {this.state.projects.map((elements, index) => {
                return (
                  <React.Fragment key={elements.key}>
                    {index % 2 === 0 ? (
                      <>
                        <div className="col-md-4">
                          <MusicItem
                            projectName={elements.projectName}
                            alias={elements.alias}
                            description={elements.description}
                            // ytEmbeddedLink={elements.ytEmbeddedLink}
                            liveUrl={elements.liveUrl}
                            tag={elements.tag}
                          />
                        </div>
                        <div className="col-md-8">
                        <div dangerouslySetInnerHTML={{ __html: elements.ytEmbeddedLink }} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-8">
                        <div dangerouslySetInnerHTML={{ __html: elements.ytEmbeddedLink }} />
                        </div>
                        <div className="col-md-4">
                          <MusicItem
                            projectName={elements.projectName}
                            alias={elements.alias}
                            // ytEmbeddedLink={elements.ytEmbeddedLink}
                            liveUrl={elements.liveUrl}
                            tag={elements.tag}
                          />
                        </div>
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default MusicPage;