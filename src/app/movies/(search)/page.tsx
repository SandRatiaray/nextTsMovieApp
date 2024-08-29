import React from 'react';
import SearchResults from './SearchResults';

const MoviesPage = ({searchParams}: {searchParams: any}) => {
    return (
        <div>
            <SearchResults searchParams={searchParams}/>
        </div>
    );
};

export default MoviesPage;