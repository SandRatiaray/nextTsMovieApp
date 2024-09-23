"use client"


import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signIn, useSession } from 'next-auth/react';
import React, { SyntheticEvent, useState } from 'react';

const Like = ({ mediaId }: { mediaId: string }) => {
    const { data: session } = useSession()
    const [like, setLike] = useState('#ff0000')

    const handleLikeCliked = (e: SyntheticEvent) => {
        e.preventDefault()
        if (!session) {
            signIn()
        }
        fetch(`/api/like/${mediaId}`, {
            method: "POST",
        });
    }


    return (
        <div onClick={handleLikeCliked}>
            <FontAwesomeIcon icon={faHeart} style={{ color: like }} size='sm' onClick={() => setLike("black")} />
        </div>
    );
};

export default Like; 