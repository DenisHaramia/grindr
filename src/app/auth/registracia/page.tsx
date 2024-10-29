// src/app/auth/registracia/page.tsx

import Container from "@mui/material/Container";
import RegisterComponent from "@/components/RegisterComponent";

export const metadata = { title: "Register" };

export default function Register() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
        textAlign: 'center',
      }}
    >
      <RegisterComponent />
    </Container>
  );
}