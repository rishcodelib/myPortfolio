import React, { useState } from 'react';
// Assuming you have an Axios client for API calls
// import projectService from '../services/projectService'; 

// List of suggested tags for the dropdown
const ALL_TAGS = ["NodeJS", "ExpressJS", "React", "MongoDB", "Bootstrap", "AWS", "Java", "HTML", "CSS", "JavaScript", "Python"];

function ProjectForm() {
  // State to hold all form data
  const [formData, setFormData] = useState({
    projectName: '',
    shortDesc: '',
    description: '',
    liveUrl: '',
    gitUrl: '',
    demoUrl: '',
    // imgSrc will be handled separately as a File object
    keyFeatures: '', // Initialized as a string to be parsed later
    technologiesUsed: '', // Initialized as a string to be parsed later
    tag: [], // Array for selected tags
  });

  // State to hold the selected image file
  const [projectImage, setProjectImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // --- Handlers for regular text/URL inputs ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- Handler for the Image File Input ---
  const handleImageChange = (e) => {
    // Stores the File object from the input
    setProjectImage(e.target.files[0]);
  };

  // --- Handler for the Tags Select Input ---
  const handleTagChange = (e) => {
    const options = e.target.options;
    const selectedTags = [];
    
    // Iterate through all options to find which ones are selected
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedTags.push(options[i].value);
      }
    }
    setFormData(prevData => ({
      ...prevData,
      tag: selectedTags,
    }));
  };

  // --- Submission Handler ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('Uploading project...');

    // 1. Prepare Data for API: Use FormData for file uploads
    const dataToUpload = new FormData();

    // Append regular form fields
    for (const key in formData) {
      if (key === 'tag') {
        // Append tags as an array/string (API dependent)
        dataToUpload.append(key, JSON.stringify(formData[key]));
      } else if (key === 'keyFeatures' || key === 'technologiesUsed') {
        // Simple conversion: Split multiline string into array before appending
        const arrayValue = formData[key].split('\n').filter(line => line.trim() !== '');
        dataToUpload.append(key, JSON.stringify(arrayValue));
      } else {
        dataToUpload.append(key, formData[key]);
      }
    }

    // Append the image file
    if (projectImage) {
      dataToUpload.append('projectImage', projectImage); // 'projectImage' is the expected field name on the server
    }

    // 2. API Call (Example using a placeholder)
    try {
        // Replace with your actual project service POST call
        // const response = await projectService.post('/projects/upload', dataToUpload);
        
        // --- Placeholder Success Logic ---
        console.log("Data Prepared for Upload:", Object.fromEntries(dataToUpload));
        // You would typically reset the form here
        // setFormData({ ... }); 
        // setProjectImage(null);
        setMessage('Project uploaded successfully!');

    } catch (error) {
      console.error("Upload failed:", error);
      setMessage('Upload failed. See console for details.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        
        {/* Project Name */}
        <div className="mb-3">
          <label htmlFor="projectName" className="form-label">Project Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="projectName" 
            name="projectName"
            value={formData.projectName}
            onChange={handleInputChange}
            required 
          />
        </div>

        {/* Project Image Upload */}
        <div className="mb-3">
          <label htmlFor="projectImage" className="form-label">Project Image</label>
          <input 
            type="file" 
            className="form-control" 
            id="projectImage" 
            name="projectImage"
            onChange={handleImageChange}
            accept="image/*"
            required 
          />
        </div>

        {/* Short Description */}
        <div className="mb-3">
          <label htmlFor="shortDesc" className="form-label">Short Description</label>
          <textarea 
            className="form-control" 
            id="shortDesc" 
            name="shortDesc"
            rows="2"
            value={formData.shortDesc}
            onChange={handleInputChange}
            required 
          />
        </div>

        {/* Full Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Full Description</label>
          <textarea 
            className="form-control" 
            id="description" 
            name="description"
            rows="5"
            value={formData.description}
            onChange={handleInputChange}
            required 
          />
        </div>
        
        {/* Key Features (Multi-line text area) */}
        <div className="mb-3">
          <label htmlFor="keyFeatures" className="form-label">Key Features (One per line)</label>
          <textarea 
            className="form-control" 
            id="keyFeatures" 
            name="keyFeatures"
            rows="3"
            placeholder="e.g., Responsive Design\nSEO Optimization"
            value={formData.keyFeatures}
            onChange={handleInputChange}
          />
        </div>

        {/* Technologies Used (Multi-line text area) */}
        <div className="mb-3">
          <label htmlFor="technologiesUsed" className="form-label">Technologies Used (One per line)</label>
          <textarea 
            className="form-control" 
            id="technologiesUsed" 
            name="technologiesUsed"
            rows="3"
            placeholder="e.g., React\nNode.js & Express"
            value={formData.technologiesUsed}
            onChange={handleInputChange}
          />
        </div>
        
        {/* Project Tags (Multi-select) */}
        <div className="mb-3">
          <label htmlFor="tagSelect" className="form-label">Project Tags</label>
          <select 
            multiple 
            className="form-control" 
            id="tagSelect" 
            onChange={handleTagChange}
            value={formData.tag}
          >
            {ALL_TAGS.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          <div className="form-text">Hold Ctrl (or Cmd on Mac) to select multiple tags.</div>
        </div>

        {/* URL Fields */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="liveUrl" className="form-label">Live URL</label>
            <input type="url" className="form-control" id="liveUrl" name="liveUrl" value={formData.liveUrl} onChange={handleInputChange} />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="gitUrl" className="form-label">Git URL</label>
            <input type="url" className="form-control" id="gitUrl" name="gitUrl" value={formData.gitUrl} onChange={handleInputChange} />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="demoUrl" className="form-label">Demo URL</label>
            <input type="url" className="form-control" id="demoUrl" name="demoUrl" value={formData.demoUrl} onChange={handleInputChange} />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Uploading...' : 'Submit Project'}
        </button>
        {message && <p className="mt-3 text-info">{message}</p>}
      </form>
    </div>
  );
}

export default ProjectForm;