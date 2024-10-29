// app/components/UserProfile.tsx

"use client";

import { useSession, signOut } from 'next-auth/react';

export default function UserProfile() {
    const { data: session } = useSession();

    if (!session) {
        return <p>NEPRIHLÁSENÝ</p>;
    }

    return (
        <div>
            <p>Prihlásený ako {session.user?.name}</p>
        </div>
    );
}