import React from 'react';
import SearchResults from '../../SearchResults';

const GenreIdPage = ({ params, searchParams }: { params: { id: string, locale: string }, searchParams: any }) => {
    return <SearchResults searchParams={searchParams} genreId={params.id} locale={params.locale} />;
};

export default GenreIdPage;