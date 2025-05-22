import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';






export const TrafficCameras = () => {

    const cameras = [
        {
            title: 'I-87 at NC-96',
            imgUrl: 'https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_Arendell.JPG&t=1747305658098',
        },
        {
            title: 'I-87 at Green Pace',
            imgUrl: 'https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_mm434.JPG&t=1747305560393',
        },
        {
            title: 'I-87 at Neuse River',
            imgUrl: 'https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I87_NeuseRiver.JPG&t=1739970465341',
        },
        {
            title: 'I-540 at I-87',
            imgUrl: 'https://eapps.ncdot.gov/services/traffic-prod/v1/cameras/images?filename=I540_I87.JPG&t=1739970588254',
        },


    ];


    const handleCardClick = (img, title) => {
        setSelectedImage(img);
        setSelectedTitle(title);
        setShowModal(true);
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedTitle, setSelectedTitle] = useState('');

    return (
        <>

            <div className='row'>
                {cameras.slice(0, 4).map((cam, index) => (
                    <div className="col-6 col-md-3" key={index}>
                        <Card style={{ width: '100%', cursor: 'pointer' }} onClick={() => handleCardClick(cam.imgUrl, cam.title)}>
                            <Card.Img variant="top" src={cam.imgUrl} />
                            <Card.Body>
                                <Card.Title>{cam.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <img src={selectedImage} alt={selectedTitle} className="img-fluid" />
                </Modal.Body>
            </Modal>

        </>
    );
};