import React from 'react';

export const useApolloQuery = (query) => {
    const { loading, error, data } = useQuery(query);
    return { data, error, loading }
}