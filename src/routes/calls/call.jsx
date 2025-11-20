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
  // Handles case where coordinates might be null, undefined, or "0"
  const safeLat = Number(data?.latitude) || 0;
  const safeLng = Number(data?.longitude) || 0;

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

      {/* Use optional chaining for safe data access in the popup */}
      <Marker key={data?._id || 'marker'} position={position}>
        <Popup>
          {data?.calldate} at {data?.calltime}<br />
          {data?.agency}<br />
          {data?.incident}<br />
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
    window.location.href = '/calls'; // Updated to lowercase /calls route
  };


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      {/* Use optional chaining (?.) for clean data access */}
      <Form.Group controlId="incidentType" className="mb-3">
        <Form.Label>Incident Type</Form.Label>
        <Form.Control readOnly defaultValue={data?.incidentType || ""} />
      </Form.Group>

      <Form.Group controlId="agency" className="mb-3">
        <Form.Label>Agency</Form.Label>
        <Form.Control readOnly defaultValue={data?.agency || ""} />
      </Form.Group>

      <Form.Group controlId="location" className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control readOnly defaultValue={data?.location || ""} />
      </Form.Group>

      <Form.Group controlId="callDate" className="mb-3">
        <Form.Label>Call Date</Form.Label>
        <Form.Control readOnly defaultValue={data?.callDate || ""} />
      </Form.Group>

      <Form.Group controlId="callTime" className="mb-3">
        <Form.Label>Call Time</Form.Label>
        <Form.Control readOnly defaultValue={data?.callTime || ""} />
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
        {/* Changed type="submit" to type="button" for cancel to prevent form submission */}
        <button className="btn btn-secondary me-1" type="button" onClick={handleCancel}>Cancel</button>
      </Form.Group>
    </Form>
  )
}

//--- BUILD PAGE
export default function CallPage() {

  // Use const instead of var
  const getOneName = "getCall";
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
        <h1 className="display-6">Call Details</h1>
        <p className="mt-4">Record ID {recordId} not found or data is unavailable.</p>
        <button className="btn btn-secondary" onClick={() => window.location.href = '/calls'}>Back to Calls</button>
      </div>
    );
  }

  //--- return the assembled page
  return (
    <React.Fragment>
      <div className="container-xl">
        <h1 className="display-6">Call Details</h1>

        {/* Used Bootstrap margin utility to replace <p></p> spacers */}
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