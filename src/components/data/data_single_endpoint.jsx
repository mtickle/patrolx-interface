
import React from "react";
import axios from "axios";

export const DataSingleEndpoint = (apiEndPoint, recordId) => {

    // console.log("apiEndPoint: ", apiEndPoint)
    // console.log("recordId: ", recordId)

    const [Item, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
        }
    };

    const client = axios.create({
        baseURL: "http://192.168.86.58:8080/api/" + apiEndPoint
        //baseURL: "http://localhost:8080/api/" + apiEndPoint
    });

    React.useEffect(() => {
        client.get(recordId, config)
            .then((response) => {
                //console.log(response.data);
                setItems(response.data);
            });
    }, []);

    return Item

}


