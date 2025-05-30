import React from 'react';
import '../style/JobTemplate.css' ; // Optional if you want styling


const JobTemplate = ({ job }) => {
  return (
    <div className="job-card" style={{ display: 'flex', gap: '20px', border: '1px solid #ccc', padding: '20px', borderRadius: '12px', marginBottom: '20px' }}>
      <div className="job-details" style={{ flex: 1 }}>
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Role:</strong> {job.role}</p>
        <p><strong>Qualification:</strong> {job.qualification}</p>
        <p><strong>Batch:</strong> {job.batch}</p>
        <p><strong>Experience:</strong> {job.experience}</p>
        <p><strong>Salary:</strong> {job.salary}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Selection Process:</strong> {job.selectionProcess}</p>
       
        <a href={job.applyLink} target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Apply Now</a>
      </div>

      {job.image &&
      <div className="job-image" style={{ width: '120px', height: '120px' }}>
        <img src='logo.png' style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
      </div>
}
    </div>
  );
};

export default JobTemplate;
