// src/components/JobList.jsx
import React, { useEffect, useState } from 'react';
import JobTemplate from './JobTemplate';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/jobs'
    ) // change to your deployed backend if needed
      .then((res) => res.json())
      
      .then((data) =>{ 
        console.log('Fetched data from backend',data);
        setJobs(data);})
      .catch((err) => console.error('Error fetching jobs:', err));
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', paddingTop: '30px' }}>
      <h1>Latest Job Posts</h1>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        jobs.map((job, index) => (
          <JobTemplate key={index} job={job} />
        ))
      )}
    </div>
  );
};

export default JobList;
