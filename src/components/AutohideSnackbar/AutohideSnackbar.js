import React from 'react';
import { Alert, Snackbar } from '@mui/material';

const AutohideSnackbar = ({ open, setOpen, message }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} icon={false} sx={{ bgcolor: 'primary.green', color: '#fff' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AutohideSnackbar;
