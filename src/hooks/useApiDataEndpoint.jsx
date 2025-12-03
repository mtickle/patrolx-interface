// src/hooks/useuseDataEndpoint.js
// (I recommend putting hooks in their own 'hooks' folder)

import axios from "axios";
import React from "react";

// 1. Rename to 'useuseDataEndpoint' (Rules of Hooks)
export const useApiDataEndpoint = (apiEndPoint, itemCount) => {

    // 2. Add loading and error states
    const [data, setData] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    // 3. Get API URL and Key from environment variables

    const API_BASE_URL = import.meta.env.VITE_PATROLX_API_URL || "https://patrolx-api.onrender.com/api/";
    const API_KEY = import.meta.env.VITE_PATROLX_API_KEY;

    React.useEffect(() => {
        // Don't run if the endpoint isn't set
        if (!apiEndPoint) return;

        // Set loading state for new requests
        setIsLoading(true);
        setError(null);

        const config = {
            headers: {
                'x-api-key': API_KEY
            }
        };

        const client = axios.create({
            baseURL: API_BASE_URL + apiEndPoint
        });

        // console.log("*** ApiDataEndpoint URL")
        // console.log(API_BASE_URL + apiEndPoint);


        client.get('?limit=' + itemCount, config)
            .then((response) => {
                setData(response.data);
            })
            .catch((err) => {
                // 4. Handle errors
                console.error("Error fetching data:", err);
                setError(err);
            })
            .finally(() => {
                // 5. Always stop loading
                setIsLoading(false);
            });

        // 6. Add dependencies to re-fetch when they change
    }, [apiEndPoint, itemCount, API_KEY, API_BASE_URL]);

    // 7. Return an object with all states
    return { data, isLoading, error };
}