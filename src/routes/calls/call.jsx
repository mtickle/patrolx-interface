import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
//import { confirm } from "../components/Confirmation";

//--- IMPORTS: DATA
import { DataSingleEndpoint } from '../../components/data/data_single_endpoint';

//--- IMPORTS: MAP
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

//--- SET PAGE NAME
function PageName() {
  return "Call Details"
}

//--- BUILD MAP
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

  const position = {
    lat: Number(latitude),
    lng: Number(longitude)
  }

  const center = {
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

        <Marker key={data._id} position={position}>
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

 //--- BUILD FORM
function PageForm({ data }) {

  const { handleSubmit } = useForm();

  //--- HANDLE THE SUBMIT BUTTON
  const onSubmit = () => {
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

//--- BUILD PAGE
export default function CallPage() {

  //--- data elements
  var getOneName = "getCall"
  var recordId = new URLSearchParams(location.search).get("id");
  var formData = DataSingleEndpoint(getOneName, recordId);

  console.log(formData)

  //--- don't load the page unless we have data.
  let itemId = formData._id
  if (itemId === undefined) {
    return;
  } else {
    console.log(itemId.length)
  }

  //--- return the assembled page
  return (
    <React.Fragment>
      <div className="container-xl">
        <h1 className="display-6"><PageName /></h1>
        <p></p>
        <div className="card">
          <div className="card-header">
            Map
          </div>
          <div className="card-body">
            <PageMap data={formData} />
          </div>
        </div>
        <p></p>
        <div className="card">
          <div className="card-header">
            Form
          </div>
          <div className="card-body">
            <PageForm data={formData} />
          </div>
        </div>
        <p></p>
      </div>
    </React.Fragment>
  )
}
