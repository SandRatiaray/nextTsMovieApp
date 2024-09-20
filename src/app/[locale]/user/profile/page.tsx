import LogoutButton from '@/components/logout-button/LogoutButton';
import React from 'react';

const ProfilePage = () => {
    return (
        <div style={{ height: "600px", paddingTop: "50px", color: "white" }}>
            <h1>Vous êtes connecté</h1>
            <LogoutButton/>
        </div>
    );
};

export default ProfilePage;