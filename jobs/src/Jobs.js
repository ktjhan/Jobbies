import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';
import JobModal from './JobModal';
import Button from '@material-ui/core/Button';

import MobileStepper from '@material-ui/core/MobileStepper';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


export default function Jobs({jobs}) {

  //modal
  const [open, setOpen] = useState(false);
  const [selectedJob, selectJob] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //pagination
  const numJobs = jobs.length;
  const numPages = Math.ceil(numJobs/50);
  const [activeStep, setActiveStep] = useState(0);
  const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  return(
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose}/>
      <Typography variant="h4" component="h1">
        Entry Level Software Engineering Job Board
      </Typography>
      <Typography variant="h6" component="h1">
        Found {numJobs} Jobs
      </Typography>
      {
        jobsOnPage.map(
          (job,i) => <Job key={i} job={job} onClick={() => {
            console.log('clicked');
            handleClickOpen();
            selectJob(job);
           }} />
        )
      }

      <div>
        Page {activeStep + 1} of {numPages}
      </div>

    <MobileStepper
         variant="progress"
         steps={numPages}
         position="static"
         activeStep={activeStep}
         nextButton={
           <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
             Next
            <KeyboardArrowRight />
           </Button>
         }
         backButton={
           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
             Back
           </Button>
         }
     />
  </div>
  )
}
