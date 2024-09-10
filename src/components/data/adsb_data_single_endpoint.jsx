import React from "react";
import axios from "axios";

export const AdsbDataSingleEndpoint = (apiEndPoint, recordId) => {

    const [Item, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '8aBTsqrZuPRWRbV6tnoDI4pZ6HA5570r'
        }
    };

    const client = axios.create({
        baseURL: "http://192.168.86.2:8081/api/" + apiEndPoint
    });

    React.useEffect(() => {
        client.get(recordId, config)
            .then((response) => {
                setItems(response.data);
            });
    }, []);

    return Item

}


