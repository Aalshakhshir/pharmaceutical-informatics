import React from 'react';
import { useQuery } from '@apollo/client'

export const useApolloQuery = (query) => {
    const { loading, error, data } = useQuery(query);
    return { data, error, loading }
}