import React, {useState, useEffect} from 'react'
import './Bookmarks.css'

const Bookmarks = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState([])

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem('bookmarkedJobs')) || []
    setBookmarkedJobs(savedJobs)
  }, [])

  const handleDelete = jobId => {
    const updatedJobs = bookmarkedJobs.filter(job => job.id !== jobId)
    setBookmarkedJobs(updatedJobs)
    localStorage.setItem('bookmarkedJobs', JSON.stringify(updatedJobs))
  }

  return (
    <div className="bookmarks-container">
      <h1>Bookmarked Jobs</h1>
      {bookmarkedJobs.length === 0 ? (
        <p>No jobs bookmarked yet.</p>
      ) : (
        bookmarkedJobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title || 'Title not available'}</h3>
            <p>
              Location: {job.primary_details?.Place || 'Location not available'}
            </p>
            <p>
              Salary: {job.primary_details?.Salary || 'Salary not available'}
            </p>
            <p>Phone: {job.phone || 'Phone not available'}</p>
            <button
              className="delete-button"
              onClick={() => handleDelete(job.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default Bookmarks
