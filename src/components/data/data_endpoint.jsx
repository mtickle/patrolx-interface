
import React from "react";
import axios from "axios";

export const DataEndpoint = (apiEndPoint, itemCount) => {

    const [Items, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
        }
    };

    const client = axios.create({
               //baseURL: "https://seahorse-app-izgzv.ondigitalocean.app/api/" + apiEndPoint
               baseURL: "http://192.168.86.2:8080/api/" + apiEndPoint
    });

    React.useEffect(() => {
        client.get('?limit=' + itemCount, config)
            .then((response) => {
                setItems(response.data);
                //console.log(apiEndPoint + ":" + itemCount)
            });
    }, []);

    return Items

}


