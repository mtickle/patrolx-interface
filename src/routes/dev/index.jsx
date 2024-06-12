
import React from "react";
import axios from "axios";

//--- STANDARD IMPORTS: DATA
import { DataEndpoint } from '../../components/data/data_endpoint';


function makeData(apiEndPoint, itemCount) {


    const [Items, setItems] = React.useState([]);

    const config = {
        headers: {
            'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
        }
    };

    const client = axios.create({
        //baseURL: "https://seahorse-app-izgzv.ondigitalocean.app/api/" + apiEndPoint
        baseURL: "http://192.168.86.2:8080/api/getAllCalls"
    });

    React.useEffect(() => {
        client.get('?limit=10', config)
            .then((response) => {
                setItems(response.data);
            });
        //return () => client.disconnect();
    }, []);

    return Items

}

//--- BUILD PAGE
export default function DevPage() {


    console.log(makeData("getAllCalls", 10))




}