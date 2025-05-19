import React, { Component } from 'react';
import { Helmet } from 'react-helmet-async';
import MusicEntity from '../Entity/musicEntity';
import MusicItem from '../Components/musicComponent/musicItem';
import { MUSIC_INSTA_NAME, MUSIC_YT_LINK, MUSIC_YT_NAME } from '../constants';
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
          <title>Music | Rishabh Aggarwal | {MUSIC_INSTA_NAME} </title>
        </Helmet>
        <section className="project-card container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Musical Journey</h1>
              <h6 className="text-center codewithRishhiii">
                Partnered By <b><a href={MUSIC_YT_LINK} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '> {MUSIC_YT_NAME} <i className="fa-brands fa-youtube fa-xl text-danger"></i></a></b>
              </h6>
              {/* <p className="text-center">These projects are purely for personal knowledge enhancement and proof of concept.</p> */}
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
                        <div className="col-md-6">
                          <MusicItem
                            projectName={elements.projectName}
                            alias={elements.alias}
                            shortDesc={elements.shortDesc}
                            description={elements.description}
                            ytEmbeddedLink={elements.ytEmbeddedLink}
                            liveUrl={elements.liveUrl}
                            tag={elements.tag}
                          />
                        </div>
                        <div className="col-md-6">
                          <div dangerouslySetInnerHTML={{ __html: elements.ytEmbeddedLink }} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-md-6">
                          <div dangerouslySetInnerHTML={{ __html: elements.ytEmbeddedLink }} />
                        </div>
                        <div className="col-md-6">
                          <MusicItem
                            projectName={elements.projectName}
                            alias={elements.alias}
                            shortDesc={elements.shortDesc}
                            description={elements.description}
                            ytEmbeddedLink={elements.ytEmbeddedLink}
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