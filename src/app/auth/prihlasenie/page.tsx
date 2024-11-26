//src/app/auth/prihlasenie/page.tsx

import Container from "@mui/material/Container";
import LoginComponent from "@/components/LoginComponent"

export const metadata = { title: "Login" };

export default function Login() {

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
      <LoginComponent />
        </Container>
    );
}