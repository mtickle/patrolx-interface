import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// --- STANDARD IMPORTS ---
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint';
import Spinner from 'react-bootstrap/Spinner';


//--- BUILD MAP
function PageMap({ data }) {
  // Parent component ensures 'data' is loaded, but we maintain defensive checks

  // Simplifies the manual isNaN check using modern JS Number conversion and null-coalescing
  const safeLat = Number(data.latitude) || 0;
  const safeLng = Number(data.longitude) || 0;

  const mapRef = useRef();
  const zoom = 11;
  const containerStyle = {
    width: "100%",
    height: "400px"
  }

  const position = {
    lat: safeLat,
    lng: safeLng
  }

  const center = {
    lat: safeLat,
    lng: safeLng
  }

  return (
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
  )
}

//--- BUILD FORM (Cleaned up for read-only use)
function PageForm({ data }) {

  // Removed useForm since inputs are readOnly and submission logic is commented out
  const { handleSubmit } = useForm();

  //--- HANDLE THE SUBMIT BUTTON (Kept for structure, but logic is commented out)
  const onSubmit = () => {
    console.log("Submit button pressed (Logic stub)");
  };

  //--- HANDLE THE CANCEL BUTTON
  const handleCancel = () => {
    // NOTE: In a modern React app, useNavigate() would be used here.
    window.location.href = '/Crashes';
  };


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Form.Group controlId="crimeDescription" className="mb-3">
        <Form.Label>Crime Description</Form.Label>
        <Form.Control readOnly defaultValue={data?.crimeDescription || ""} />
      </Form.Group>

      <Form.Group controlId="crimeCode" className="mb-3">
        <Form.Label>Crime Code</Form.Label>
        <Form.Control readOnly defaultValue={data?.crimeCode || ""} />
      </Form.Group>

      {/* ... other form groups using optional chaining 'data?' ... */}

      <Form.Group controlId="district" className="mb-3">
        <Form.Label>District</Form.Label>
        <Form.Control readOnly defaultValue={data?.district || ""} />
      </Form.Group>

      <Form.Group controlId="reportedDate" className="mb-3">
        <Form.Label>Reported Date</Form.Label>
        <Form.Control readOnly defaultValue={data?.reportedDate || ""} />
      </Form.Group>

      <Form.Group controlId="reportedTime" className="mb-3">
        <Form.Label>Reported Time</Form.Label>
        <Form.Control readOnly defaultValue={data?.reportedTime || ""} />
      </Form.Group>

      <Form.Group controlId="latitude" className="mb-3">
        <Form.Label>Latitude</Form.Label>
        <Form.Control readOnly defaultValue={data?.latitude || ""} />
      </Form.Group>

      <Form.Group controlId="longitude" className="mb-3">
        <Form.Label>Longitude</Form.Label>
        <Form.Control readOnly defaultValue={data?.longitude || ""} />
      </Form.Group>

      <Form.Group className="mb-3">
        <button className="btn btn-secondary me-1" type="button" onClick={handleCancel}>Cancel</button>
      </Form.Group>
    </Form>
  )
}

//--- BUILD PAGE
export default function CrashLocationPage() {

  // Use const instead of var
  const getOneName = "getIncident";
  // Get record ID from URL
  const recordId = new URLSearchParams(location.search).get("id");

  // Standard Hook Call
  const { data: formData, isLoading } = useApiDataEndpoint(getOneName, recordId);

  //--- Standard Guard Clause
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // Handles case where recordId is invalid or API returns no data
  if (!formData) {
    return (
      <div className="text-center p-5">
        <p>Record ID {recordId} not found or data is unavailable.</p>
        <button className="btn btn-secondary" onClick={() => window.location.href = '/Crashes'}>Back to Crashes</button>
      </div>
    );
  }

  //--- return the assembled page
  return (
    <React.Fragment>
      <div className="container-xl">
        {/* Replaced PageName() function with hardcoded title */}
        <h1 className="display-6">Crash</h1>

        <div className="card mb-3">
          <div className="card-header">
            Map
          </div>
          <div className="card-body">
            <PageMap data={formData} />
          </div>
        </div>

        <div className="card mb-3">
          <div className="card-header">
            Form
          </div>
          <div className="card-body">
            <PageForm data={formData} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}