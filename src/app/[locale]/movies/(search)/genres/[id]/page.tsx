import React from 'react';
import SearchResults from '../../SearchResults';
import { Locale } from '@/utils/i18n-config';

const GenreIdPage = ({ params, searchParams }: { params: { id: string, locale: Locale }, searchParams: any }) => {
    return <SearchResults searchParams={searchParams} genreId={params.id} locale={params.locale} />;
};

export default GenreIdPage;