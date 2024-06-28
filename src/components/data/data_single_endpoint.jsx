
import React from "react";
import axios from "axios";

export const DataSingleEndpoint = (apiEndPoint, recordId) => {

    const [Item, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
        }
    };

    const client = axios.create({
        //baseURL: "https://seahorse-app-izgzv.ondigitalocean.app/api/" + apiEndPoint
        baseURL: "http://192.168.86.2:8080/api/" + apiEndPoint
        //baseURL: "https://patrolx-api.onrender.com/api/" + apiEndPoint
    });

    React.useEffect(() => {
        client.get(recordId, config)
            .then((response) => {
                setItems(response.data);
                //console.log(apiEndPoint + ":" + recordId)
            });
    }, []);

    return Item

}


