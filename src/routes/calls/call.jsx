import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
//import { confirm } from "../components/Confirmation";


//--- DATA
import axios from "axios";

//--- MAP
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

function PageName() {
  return "Call Details"
}

function PageMap({ data }) {

  let longitude

  if (isNaN(data.longitude)) {
    longitude = "0"
  } else {
    longitude = data.longitude
  }

  let latitude

  if (isNaN(data.latitude)) {
    latitude = "0"
  } else {
    latitude = data.latitude
  }

  const mapRef = useRef();
  const zoom = 11;
  const containerStyle = {
    width: "100%",
    height: "400px"
  }
  const center = {
    lat: 35.8158871065979,
    lng: -78.65528542793695
  }

  const position = {
    lat: Number(latitude),
    lng: Number(longitude)
  }

  return (
    <>
      <MapContainer
        style={containerStyle}
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker key={data.recordId} position={position}>
          <Popup>
            {data.callDate} at {data.callTime}<br />
            {data.agency}<br />
            {data.incidentType}<br />
            {data.location}<br />
          </Popup>
        </Marker>


      </MapContainer>
    </>
  )
}

function PageForm({ data }) {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  //--- HANDLE THE SUBMIT BUTTON
  const onSubmit = (data) => {
    // if (record) {
    //   axios.put(`https://seahorse-app-izgzv.ondigitalocean.app/api/updateLocation/${record.id}`, data, config)
    //     .then(() => window.location.href = '/Table')
    //     .catch((error) => console.error(error));
    // } else {
    //   axios.post("https://seahorse-app-izgzv.ondigitalocean.app/api/postLocation", data, config)
    //     .then(() => window.location.href = '/Table')
    //     .catch((error) => console.error(error));
    // }
  };

  //--- HANDLE THE CANCEL BUTTON
  const handleCancel = () => {
    window.location.href = '/Calls';
  };


  //--- HANDLE THE DELETE BUTTON
  const handleDelete = async () => {
    // if (await confirm("Delete this item?")) {
    //   if (recordId) {
    //     axios.delete(`https://seahorse-app-izgzv.ondigitalocean.app/api/deleteLocation/${recordId}`, config)
    //       .then(window.location.href = '/Table')
    //       .catch((error) => console.error(error));
    //   }
    // }
  };


  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>

        {/* <Form.Group controlId="_id" className="mb-3">
          <Form.Label>Record ID</Form.Label>
          <Form.Control readOnly defaultValue={data ? data._id : ""} />
        </Form.Group> */}

        <Form.Group controlId="incidentType" className="mb-3">
          <Form.Label>Incident Type</Form.Label>
          <Form.Control readOnly defaultValue={data ? data.incidentType : ""} />
        </Form.Group>

        <Form.Group controlId="agency" className="mb-3">
          <Form.Label>Agency</Form.Label>
          <Form.Control readOnly defaultValue={data ? data.agency : ""} />
        </Form.Group>

        <Form.Group controlId="location" className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control readOnly defaultValue={data ? data.location : ""} />
        </Form.Group>

        <Form.Group controlId="callDate" className="mb-3">
          <Form.Label>Call Date</Form.Label>
          <Form.Control readOnly defaultValue={data ? data.callDate : ""} />
        </Form.Group>


        <Form.Group controlId="callTime" className="mb-3">
          <Form.Label>Call Time</Form.Label>
          <Form.Control readOnly defaultValue={data ? data.callTime : ""} />
        </Form.Group>

        <Form.Group controlId="latitude" className="mb-3">
          <Form.Label>Latitude</Form.Label>
          <Form.Control readOnly defaultValue={data ? data.latitude : ""} />
        </Form.Group>

        <Form.Group controlId="longitude" className="mb-3">
          <Form.Label>Longitude</Form.Label>
          <Form.Control readOnly defaultValue={data ? data.longitude : ""} />
        </Form.Group>

        <Form.Group className="mb-3">

          {/* <Button className="btn btn-primary me-1" variant="primary" type="submit">Submit</Button>
          {showDeleteButton && (
            <Button className="btn btn-danger me-1" id="deleteButton" type="submit" onClick={handleDelete}>Delete</Button>
          )} */}

          <button className="btn btn-secondary mr-1" type="submit" onClick={handleCancel}>Cancel</button>

        </Form.Group>
      </Form>
    </>

  )
}

function CallPage() {

  //--- NEW 
  const [Items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const recordId = new URLSearchParams(location.search).get("id");

  const config = {
    headers: {
      'x-api-key': '9YGxIQziMuYzgMSWmYePfxRWYdeiwLKn'
    }
  };

  const client = axios.create({
    baseURL: "https://seahorse-app-izgzv.ondigitalocean.app/api/getCall/"
  });

  useEffect(() => {
    async function getData() {
      //setIsLoading(true);
      const response = await client.get(recordId, config);
      setItems(response.data);
      //window.scrollTo(0, 0)
     // setIsLoading(false);
    }
    getData();
  }, []);

 //--- Return the UI here
  return (
    <React.Fragment>
      <div className="container-xl">
        <h1 className="display-6"><PageName /></h1>
        <p></p>
        <div className="card">
          <div className="card-header">
            Maps
          </div>
          <div className="card-body">
            <PageMap data={Items} />
          </div>
        </div>
        <p></p>
        <div className="card">
          <div className="card-header">
            Form
          </div>
          <div className="card-body">
            <PageForm data={Items} />
          </div>
        </div>
        <p></p>
      </div>
    </React.Fragment>
  )
}

export default CallPage