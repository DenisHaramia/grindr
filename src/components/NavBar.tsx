// src/app/components/NavBar.tsx

"use client";

import * as React from 'react';
import { useSession, signOut } from "next-auth/react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import { useRouter } from 'next/navigation';
import IconButton from '@mui/material/IconButton';
import { useThemeContext } from '../components/ThemeContext'; // Import the custom hook for theme

import { WbSunny as SunIcon, NightsStay as MoonIcon } from '@mui/icons-material'; // Icons for Sun and Moon

export default function SimpleBottomNavigation() {
  const { data: session } = useSession();
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  // Access theme context
  const { themeMode, toggleTheme } = useThemeContext();

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
        if (!session) {
          router.push('/auth/registracia');
        }
        break;
      case 3:
        if (!session) {
          router.push('/auth/prihlasenie');
        } else {
          signOut({ callbackUrl: '/' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative', // So the theme button is positioned at the top-right corner
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          handleNavigation(newValue);
        }}
        sx={{ width: 500 }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
        <BottomNavigationAction label="Pridať" icon={<AddCircleIcon />} />

        {!session ? (
          <BottomNavigationAction label="Register" icon={<AppRegistrationIcon />} />
        ) : (
          <></>
        )}
        {!session ? (
          <BottomNavigationAction label="Login" icon={<LoginIcon />} />
        ) : (
          <BottomNavigationAction label="Logout" icon={<LoginIcon />} />
        )}
      </BottomNavigation>

      {/* Theme Toggle Button - Positioned at the top-right */}
      <IconButton
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
          backgroundColor: 'rgba(255, 255, 255, 0,3)', // Slight background to make it stand out
          borderRadius: '50%',
        }}
        onClick={toggleTheme}
      >
        {themeMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </Box>
  );
}
