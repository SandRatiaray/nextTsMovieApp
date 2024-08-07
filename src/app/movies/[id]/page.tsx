import React from 'react';

const MoviesDetail = ({ params }: { params: { id: string } }) => {
    return (
        <div>
            <h1> Movie page with id: {params.id} </h1>
        </div>
    );
};

export default MoviesDetail;