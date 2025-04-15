
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
                //baseURL: "http://192.168.86.2:8080/api/" + apiEndPoint
                baseURL: "http://localhost:8080/api/" + apiEndPoint
    });

    console.log("DataEndpoint: " + apiEndPoint + ":" + itemCount)

    React.useEffect(() => {
        client.get('?limit=' + itemCount, config)
            .then((response) => {
                setItems(response.data);
                console.log(response.data)
            });
    }, []);

    return Items

}


