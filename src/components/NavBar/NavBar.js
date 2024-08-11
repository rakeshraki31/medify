import React from 'react';
import { Box, Container, Stack, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <header>
      <Box p={1} bgcolor="#2AA7FF">
        <Typography fontSize={14} textAlign="center" color="white">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container
        maxWidth="xl"
        sx={{ px: { xs: 2, sm: 5, md: 10 }, mx: 'auto' }} 
      >
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          py={2}
        >
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          <Stack
            direction="row"
            spacing={4}
            alignItems="center"
            className={styles.navlinks}
          >
            <a href="#find-doctors" className={styles.navlink}>Find Doctors</a>
            <Link className={styles.navlink} to="/search">Hospitals</Link>
            <a href="#medicines" className={styles.navlink}>Medicines</a>
            <a href="#surgeries" className={styles.navlink}>Surgeries</a>
            <a href="#software" className={styles.navlink}>Software for Provider</a>
            <a href="#facilities" className={styles.navlink}>Facilities</a>
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};

export default NavBar;
