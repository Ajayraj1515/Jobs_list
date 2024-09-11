import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Jobs.css'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await axios.get(
        'https://testapi.getlokalapp.com/common/jobs?page=1',
      )
      setJobs(response.data.results || []) 
      setLoading(false)
    } catch (err) {
      console.error(err)
      setError(true)
      setLoading(false)
    }
  }

  const handleBookmark = job => {
    const savedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || []
    const isBookmarked = savedJobs.some(savedJob => savedJob.id === job.id)
    if (!isBookmarked) {
      savedJobs.push(job)
      localStorage.setItem('bookmarkedJobs', JSON.stringify(savedJobs))
      alert('Job bookmarked!')
    } else {
      alert('Job is already bookmarked.')
    }
  }

  if (loading) {
    return <div>Loading jobs...</div>
  }

  if (error) {
    return <div>Failed to fetch jobs. Please try again later.</div>
  }

  return (
    <div className="jobs-container">
      <h1>Jobs</h1>
      {jobs.length === 0 ? (
        <div>No jobs available</div>
      ) : (
        jobs.map(job => (
          <div key={job.id} className="job-card">
            <h2>{job.title || 'Title not available'}</h2>
            <p>
              Location: {job.primary_details?.Place || 'Location not available'}
            </p>
            <p>
              Salary: {job.primary_details?.Salary || 'Salary not available'}
            </p>
            <p>Phone: {job.phone || 'Phone not available'}</p>
            <button
              className="bookmark-button"
              onClick={() => handleBookmark(job)}
            >
              Bookmark
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Jobs
