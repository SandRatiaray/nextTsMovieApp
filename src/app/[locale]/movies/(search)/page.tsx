import React from 'react';
import SearchResults from './SearchResults';
import { ISearchParams } from '@/interfaces/params';



const MoviesPage = ({ searchParams }: { searchParams: ISearchParams }) => {
    return (
        <div>
            <SearchResults searchParams={searchParams} />
        </div>
    );
};

export default MoviesPage;