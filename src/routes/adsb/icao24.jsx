import React, { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { set, useForm } from "react-hook-form";
//import { confirm } from "../components/Confirmation";

//--- IMPORTS: DATA
import { AdsbDataSingleEndpoint } from '../../components/data/adsb_data_single_endpoint';

//--- IMPORTS: MAP
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

//--- SET PAGE NAME
function PageName() {
  return "ADSB ICAO24 Data"
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
    window.location.href = '/Adsb';
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

<Form.Group controlId="manufacturerName" className="mb-3">
  <Form.Label>manufacturerName</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.manufacturerName : ""} />
</Form.Group>

<Form.Group controlId="model" className="mb-3">
  <Form.Label>model</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.model : ""} />
</Form.Group>

{/* <Form.Group controlId="crimeCode" className="mb-3">
  <Form.Label>Crime Code</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.crimeCode : ""} />
</Form.Group>

<Form.Group controlId="district" className="mb-3">
  <Form.Label>District</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.district : ""} />
</Form.Group>

<Form.Group controlId="reportedDate" className="mb-3">
  <Form.Label>Reported Date</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.reportedDate : ""} />
</Form.Group>


<Form.Group controlId="reportedTime" className="mb-3">
  <Form.Label>Reported Time</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.reportedTime : ""} />
</Form.Group>

<Form.Group controlId="latitude" className="mb-3">
  <Form.Label>Latitude</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.latitude : ""} />
</Form.Group>

<Form.Group controlId="longitude" className="mb-3">
  <Form.Label>Longitude</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.longitude : ""} />
</Form.Group> */}

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
export default function AdsbIcao24Page() {

 

  //--- data elements
  var getOneName = "getAircrafts"
  var recordId = new URLSearchParams(location.search).get("icao24").toLowerCase();
  var formData = AdsbDataSingleEndpoint(getOneName, recordId);

  console.log(recordId)

  //--- don't load the page unless we have data.
  // let itemId = formData.ica024
  // if (itemId === undefined) {
  //   return;
  // } else {
  //   console.log(itemId.length)
  // }


console.log(formData)
  //--- return the assembled page
  return (
    <React.Fragment>
      <div className="container-xl">
        <h1 className="display-6"><PageName /></h1>
        
        {/* <p></p>
        <div className="card">
          <div className="card-header">
            Map
          </div>
          <div className="card-body">
            <PageMap data={formData} />
          </div>
        </div> */}
        
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


