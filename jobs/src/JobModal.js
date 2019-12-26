import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export default function JobModal({job, open, handleClose}) {

  if(!job.title) {
    return <div />
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {job.title} -
        {job.company}
        <img className={'detail-logo'} src={job.company_logo} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"
            dangerouslySetInnerHTML={{__html: job.description}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <a href={job.url} target="_blank">
          <Button color="primary" autoFocus>
            Agree
          </Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
