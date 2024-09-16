import React from 'react';
import SearchResults from './SearchResults';
import { ISearchParams } from '@/interfaces/params';
import { availableLocales } from "@/utils/i18n";
import { Locale } from '@/utils/i18n-config';



export function generateStaticParams() {
    return availableLocales.map(locale => ({ locale, }));
}

const MoviesPage = ({ searchParams, params: { locale } }: { searchParams: ISearchParams, params: { locale: Locale } }) => {

    return (
        <div>
            <SearchResults searchParams={searchParams} locale={locale} />
        </div>
    );
};

export default MoviesPage;