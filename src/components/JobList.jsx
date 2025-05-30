// src/components/JobList.jsx
import React, { useEffect, useState } from 'react';
import JobTemplate from './JobTemplate';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  

  //pagination

  const fetchJobs = async (page) => {
    try {
      const res = await fetch(`http://localhost:8080/api/jobs?page=${page}`);
      const data = await res.json();
      console.log('Fetched data from backend', data);
      setJobs(data.jobs);
      setCurrentPage(data.currentPage);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error('Error fetching jobs:', err);
    }
  };

  // useEffect(() => {
  //   fetch('http://localhost:8080/api/jobs'
  //   ) // change to your deployed backend if needed
  //     .then((res) => res.json())
      
  //     .then((data) =>{ 
  //       console.log('Fetched data from backend',data);
  //       setJobs(data);})
  //     .catch((err) => console.error('Error fetching jobs:', err));
  // }, []);
  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);

  return (
    // <div style={{ maxWidth: '800px', margin: 'auto', paddingTop: '30px' }}>
    //   <h1>Latest Job Posts</h1>
    //   {jobs.length === 0 ? (
    //     <p>No jobs available.</p>
    //   ) : (
    //     jobs.map((job, index) => (
    //       <JobTemplate key={index} job={job} />
    //     ))
    //   )}
    // </div> );
    <div style={{ maxWidth: '800px', margin: 'auto', paddingTop: '30px' }}>
      <h1>Latest Job Posts</h1>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        jobs.map((job, index) => (
          <JobTemplate key={index} job={job} />
        ))
      )}

      {/* Pagination buttons */}
      <div className='pagination'>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )

};

export default JobList;
