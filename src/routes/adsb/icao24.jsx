import React, { useRef, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
//import { confirm } from "../components/Confirmation";

//--- IMPORTS: DATA
import { AdsbDataSingleEndpoint } from '../../components/data/adsb_data_single_endpoint';



//--- SET PAGE NAME
function PageName() {
  return "ADSB ICAO24 Data"
}



function PageForm({ data }) {

  //--- HANDLE THE CANCEL BUTTON
  const handleCancel = () => {
    window.location.href = '/Adsb';
  };

   return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>

      <Form.Group controlId="manufacturerName" className="mb-3">
  <Form.Label>Manufacturer</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.manufacturerName : ""} />
</Form.Group>

<Form.Group controlId="owner" className="mb-3">
  <Form.Label>Model</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.Model : ""} />
</Form.Group>

<Form.Group controlId="operatorCallsign" className="mb-3">
  <Form.Label>operatorCallsign</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.operatorCallsign : ""} />
</Form.Group>

<Form.Group controlId="model" className="mb-3">
  <Form.Label>model</Form.Label>
  <Form.Control readOnly defaultValue={data ? data.Model : ""} />
</Form.Group>

<Form.Group className="mb-3">
  <button className="btn btn-secondary mr-1" type="submit" onClick={handleCancel}>Cancel</button>
</Form.Group>
</Form>
    </>

  )
}




//--- BUILD PAGE
export default function AdsbIcao24Page() {

 

  //--- data elements
  var getOneName = "getUniqueAircraft"
  var recordId = new URLSearchParams(location.search).get("icao24").toLowerCase();
  var formData = AdsbDataSingleEndpoint(getOneName, recordId);

  //--- return the assembled page
  return (
    <React.Fragment>
      <div className="container-xl">
        <h1 className="display-6"><PageName /></h1>
        
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


