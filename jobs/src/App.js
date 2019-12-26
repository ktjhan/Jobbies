import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Jobs from './Jobs';

const JOB_API_URL = "http://localhost:3001/jobs";

async function fetchJobs(updateCb) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();

  updateCb(json);

}

function App() {

  const [jobList, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, [])

  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
