// src/app/page.tsx

import UserProfile from "@/components/UserProfile"
import Typography from "@mui/material/Typography";

export const metadata = { title: "Home" };

export default function Home() {

  return (
    <div>
      <h1>Home Page</h1>
      <UserProfile></UserProfile>
    </div>

  )
}



