import React from 'react';

const GenreIdPage = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <p> genre id : {params.id}</p>
        </div>
    );
};

export default GenreIdPage;