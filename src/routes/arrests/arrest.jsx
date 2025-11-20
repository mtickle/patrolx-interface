import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import { useForm } from "react-hook-form";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// --- STANDARD IMPORTS ---
import { useApiDataEndpoint } from '@/hooks/useApiDataEndpoint';

//--- BUILD MAP
function PageMap({ data }) {
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

      {/* Use optional chaining for data access in the popup for safety */}
      <Marker key={data?._id || 'marker'} position={position}>
        <Popup>
          {data?.callDate} at {data?.callTime}<br />
          {data?.agency}<br />
          {data?.incidentType}<br />
          {data?.location}<br />
        </Popup>
      </Marker>
    </MapContainer>
  )
}

//--- BUILD FORM
function PageForm({ data }) {

  const { handleSubmit } = useForm();

  //--- HANDLE THE SUBMIT BUTTON (Logic stub)
  const onSubmit = () => {
    console.log("Submit button pressed (Logic stub)");
  };

  //--- HANDLE THE CANCEL BUTTON
  const handleCancel = () => {
    // NOTE: In a modern React app, useNavigate() would be used here.
    window.location.href = '/incidents';
  };


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      {/* Use optional chaining (?.) for clean data access */}
      <Form.Group controlId="crimeDescription" className="mb-3">
        <Form.Label>Crime Description</Form.Label>
        <Form.Control readOnly defaultValue={data?.crimeDescription || ""} />
      </Form.Group>

      <Form.Group controlId="crimeCode" className="mb-3">
        <Form.Label>Crime Code</Form.Label>
        <Form.Control readOnly defaultValue={data?.crimeCode || ""} />
      </Form.Group>

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
        {/* Changed type="submit" to type="button" for cancel */}
        <button className="btn btn-secondary me-1" type="button" onClick={handleCancel}>Cancel</button>
      </Form.Group>
    </Form>
  )
}

//--- BUILD PAGE
// Renamed function to reflect Incident Page details
export default function IncidentPage() {

  // Use const instead of var
  const getOneName = "getIncident"; // Assuming this is the correct API endpoint
  const recordId = new URLSearchParams(location.search).get("id");

  // Standard Hook Call (Replaces DataSingleEndpoint)
  const { data: formData, isLoading } = useApiDataEndpoint(getOneName, recordId);

  //--- Standard Guard Clause: Loading State
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  // Standard Guard Clause: Data Not Found
  if (!formData) {
    return (
      <div className="text-center p-5">
        <h1 className="display-6">Incident Details</h1>
        <p className="mt-4">Record ID {recordId} not found or data is unavailable.</p>
        <button className="btn btn-secondary" onClick={() => window.location.href = '/incidents'}>Back to Incidents</button>
      </div>
    );
  }

  //--- return the assembled page
  return (
    <React.Fragment>
      <div className="container-xl">
        <h1 className="display-6">Incident Details</h1>

        <div className="card mb-3 mt-3">
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