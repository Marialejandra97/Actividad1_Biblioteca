import { useState, useEffect } from 'react';

const useFetchLibros = (url) => {
    const [fetchResponse, setFetchResponse] = useState('...');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Realizando peticion...");
                let res = await fetch(url);
                let data = await res.json();
                setFetchResponse(data.value);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { fetchResponse, loading, error };
};

export default useFetchLibros;