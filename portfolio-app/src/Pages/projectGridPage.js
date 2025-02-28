import React, { Component } from 'react'
import ProjectItem from '../Components/projectCardComponent/projectItem'
import { Helmet } from 'react-helmet-async';
import ProjectEntity from '../Entity/projectEntity';
import Divider from '../Components/divider/divider';
import Contact from '../Components/contactComponent/contact';
export class ProjectGridPage extends Component {

  // projects = ProjectEntity.getProjects();

  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectEntity.getProjects()
    };

  }
  render() {

    return (
      <div >
        <Helmet>
          <title>Projects | Rishabh Aggarwal</title>
        </Helmet>
        <section className="project-card">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Projects </h1>
              <h6 className="text-center codewithRishhiii">
                Powered By <b><a href="https://www.youtube.com/@codewithrishhiii" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '> CodeWithRishhiii <i className="fa-brands fa-youtube fa-xl text-danger"></i></a></b>
              </h6>
              {/* <p className="text-center "> These projects are purely for personal knowledge enhancement and proof of concept.</p> */}
            </div>
          </div>
          <hr className="hr-divider h-3rem "></hr>
          <div className="project-card container">
            <div className="row" >
              {this.state.projects.map((elements) => {
                return <div className="col-md-4 " key={elements.key}>
                  <ProjectItem key={elements.key}  id={elements.key} projectName={elements.projectName} alias={elements.alias} shortDesc={elements.shortDesc} liveUrl={elements.liveUrl} gitUrl={elements.gitUrl} demoUrl={elements.demoUrl} imgSrc={elements.imgSrc} tag={elements.tag} status={elements.status} />
                </div>
              })}
            </div>
          </div>
        </section>
        <Divider />
        <Contact />
      </div>

    )
  }
}


export default ProjectGridPage