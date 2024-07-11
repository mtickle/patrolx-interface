
import React from "react";
import axios from "axios";

export const DataEndpoint = (apiEndPoint, itemCount) => {

    const [Items, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '8aBTsqrZuPRWRbV6tnoDI4pZ6HA5570r'
        }
    };

    const client = axios.create({
        baseURL: "https://adsb-api-inguy.ondigitalocean.app/api/" + apiEndPoint
               //baseURL: "https://seahorse-app-izgzv.ondigitalocean.app/api/" + apiEndPoint
               //baseURL: "http://192.168.86.58:8080/api/" + apiEndPoint
               //baseURL: "https://patrolx-api.onrender.com/api/" + apiEndPoint
    });

    React.useEffect(() => {
        client.get('?limit=' + itemCount, config)
            .then((response) => {
                setItems(response.data);
            });
            //return () => client.disconnect();
    }, []);

    return Items

}


