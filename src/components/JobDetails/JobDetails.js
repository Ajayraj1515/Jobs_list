import React from 'react'
import './JobDetails.css'

function JobDetails({job}) {
  return (
    <div className="job-details-container">
      <table className="job-details-table">
        <tbody>
          <tr>
            <th>Title</th>
            <td>{job.title}</td>
          </tr>
          <tr>
            <th>Location</th>
            <td>{job.location}</td>
          </tr>
          <tr>
            <th>Salary</th>
            <td>{job.salary}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{job.description}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{job.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default JobDetails
