import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ProjectEntity from '../Entity/projectEntity';

const ProjectPage = () => {
  const { projectId } = useParams();
  let projectDetail = ProjectEntity.getProject(parseInt(projectId));
  if (!projectDetail) {
    return (
      <div>
        <Helmet>
          <title>Project Not Found | Rishabh Aggarwal</title>
        </Helmet>
        <section className="project-card container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center">Project Not Found</h1>
              <p className="text-center">The project with ID {projectId} does not exist.</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{projectDetail.projectName} | Rishabh Aggarwal</title>
      </Helmet>
      <section className="project-card container mb-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Projects </h1>
            <h6 className="text-center codewithRishhiii">
              Powered By <b><a href="https://www.youtube.com/@codewithrishhiii" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black '> CodeWithRishhiii <i className="fa-brands fa-youtube fa-xl text-danger"></i></a></b>
            </h6>
          </div>
        </div>
        <hr className="hr-divider h- 1rem "></hr>
        {/* ---------- */}
        <div className="row">
          <div className="col-md-6">
            <img src={projectDetail.imgSrc} className="img-fluid" alt={projectDetail.projectName} />
            <div className='row mt-3'>
              <div className="col-md-12">
                <h6 className='text-center'> Technologies Used </h6>
                <ul>
                  {projectDetail.technologiesUsed.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h1 > {projectDetail.projectName}</h1>
            <h6 > {projectDetail.alias}</h6>
            <p > {projectDetail.description}</p>
            <div className='row mt-3'>
              <div className="col-md-12">
                <h6 className='text-center'> Key Highlights </h6>
                <ul>
                  {Object.entries(projectDetail.keyFeatures).map(([feature, description]) => (
                    <li key={feature}>
                      <strong>{feature}:</strong> {description}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <hr className="divider" /> */}

            {/* Render the project details here */}
          </div>

          <div className="col-md-12">
            <hr className="hr-divider  "></hr>
            <div className="row">
              <div className="col-md-4 text-center">
                {projectDetail.liveUrl && (
                  <a href={projectDetail.liveUrl} className="btn btn-primary process-btn btn-live" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-link "></i> LIVE URL</a>
                )}
              </div>
              <div className="col-md-4 text-center">
                {projectDetail.demoUrl && (
                  <a href={projectDetail.demoUrl} className="btn btn-secondary process-btn btn-demo" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-laptop-code "></i> DEMO</a>
                )}
              </div>
              <div className="col-md-4 text-center">
                {projectDetail.gitUrl && (
                  <a href={projectDetail.gitUrl} className="btn btn-dark process-btn btn-git" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github "></i> GITHUB</a>
                )}
              </div>
            </div >

            {/* <h3 className='text-center'>Project Screenshots</h3> */}
            {/* <div className="row"> */}
            {/* {projectDetail.screenshots.map((screenshot, index) => (
                <div className="col-md-4" key={index}>
                  <img src={screenshot} className="img-fluid" alt={`Screenshot ${index + 1}`} />
                </div>
              ))} */}
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage