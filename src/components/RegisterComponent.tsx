// src/app/components/RegisterComponent.tsx

"use client";

import { signIn } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

export default function RegisterComponent() {
  const handleGoogleSignIn = () => {
    signIn("google",);
  };

  return (
    <Box
      sx={{
        padding: 4,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 3,
        textAlign: 'center',
        width: '100%',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignIn}
        sx={{ mt: 2 }}
      >
        Register with Google
      </Button>
    </Box>
  );
}