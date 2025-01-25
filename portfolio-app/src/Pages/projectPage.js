import React, { Component } from 'react'
import ProjectItem from '../Components/projectCardComponent/projectItem'
import { Helmet } from 'react-helmet-async';
import ProjectEntity from '../Entity/projectEntity';

export class ProjectPage extends Component {

  projects = ProjectEntity.getProjects();

  constructor() {
    super();
    this.state = {
      projects: this.projects,
      loading: false
    }

  }
  render() {

    return (
      <div>
        <Helmet>
          <title>Projects | Rishabh Aggarwal</title>
        </Helmet>
        <section className="project-card mt-5">
          <hr className="hr-divider h-3rem "></hr>
          <div className="project-card container">
            <div className="row" >
              {this.state.projects.map((elements) => {
                return <div className="col-md-4 " key={elements.key}>
                  <ProjectItem key={elements.key} projectName={elements.projectName} alias={elements.alias} description={elements.description} liveUrl={elements.liveUrl} gitUrl={elements.gitUrl} demoUrl={elements.demoUrl} imgSrc={elements.imgSrc} tag={elements.tag} status={elements.status}/>
                </div>
              })}
            </div>
          </div>
        </section>
      </div>

    )
  }
}


export default ProjectPage