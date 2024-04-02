import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../main'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const { isAuthorized, jobCount, setJobCount } = useContext(Context)

  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      axios.get("http://localhost:4000/api/v1/job/getall", { withCredentials: true })
        .then((res) => {
          console.log(res.data.jobs.length);
          setJobs(res.data);
          setJobCount(res.data.jobs.length)

        })
    } catch (err) {
      console.log(err);
    }
  }, [])

  if (!isAuthorized) {
    navigateTo('/login')
  }

  return (
    <section className='jobs page'>
      <div className="container">
        <h1 style={{'margin':'72px'}}>All Available Jobs</h1>
        <div className="banner">
          {jobs.length === 0 ? (
            <p>No jobs available</p>
          ) : (
            jobs.jobs && jobs.jobs.map((element) => (
              <div className="card" key={element._id}>
                <p>{element.title}</p>
                <p>{element.category}</p>
                <p>{element.country}</p>
                <Link to={`/job/${element._id}`}>Job details</Link>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Jobs
