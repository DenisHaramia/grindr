//src/components/NavBar.tsx

"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation'; // For Next.js routing

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const router = useRouter(); // Initialize the Next.js router

  const handleNavigation = (newValue: number) => {
    setValue(newValue);

    
    switch (newValue) {
      case 0:
        router.push('/'); 
        break;
      case 1:
        router.push('/pridat'); 
        break;
      case 2:
        router.push('/auth/registracia'); 
        break;
      case 3:
        router.push('/auth/prihlasenie'); 
        break;
      default:
        break;
    }
  };

return (
  <Box
    sx={{
      height: '', // Full viewport height
      display: 'flex',
      justifyContent: 'center', // Centers horizontally
      alignItems: 'center', // Centers vertically
    }}
  >
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        handleNavigation(newValue);
      }}
      sx={{ width: 500 }} // Adjust width if needed
    >
      <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
      <BottomNavigationAction label="Pridať" icon={<AddCircleIcon />} />
      <BottomNavigationAction label="Registrácia" icon={<AppRegistrationIcon />} />
      <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} />

    </BottomNavigation>
  </Box>
);
}
