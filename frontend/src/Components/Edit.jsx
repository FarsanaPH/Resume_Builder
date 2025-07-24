import React from 'react'
import { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import Button from '@mui/material/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

function Edit() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn btn-primary' onClick={handleShow}>
                <FaEdit />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>EDIT RESUME</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mt-3">
                        <h4>Personal Information</h4>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <TextField
                                    label="Full Name"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="Job Title"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="Location"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>

                        </Grid>
                    </div>
                    <div className="mt-3">
                        <h4>Contact Details</h4>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <TextField
                                    label="Email"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="Phone Number"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="GitHub Profile Link"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="LinkedIn Profile Link"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="Portfolio Link"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="mt-3">
                        <h4>Education Details</h4>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <TextField
                                    label="Course Name"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="College Name"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="University"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="Year of Passout"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="mt-3">
                        <h4>Professional Details</h4>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <TextField
                                    label="Job or Internship"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="Company Name"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="Location"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                            <Grid size={12}>
                                <TextField
                                    label="Duration"
                                    maxRows={4}
                                    variant="standard"
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className="mt-3">
                        <h4>Skills & Certifications</h4>
                        <TextField
                            label="Add Skill"
                            maxRows={4}
                            variant="standard"
                            multiline
                            fullWidth
                        />
                        <Button className='btn btn-primary mt-3' variant='outlined'>ADD+</Button>
                        <div className="mt-3">
                            <h5>Suggestions :</h5>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>REACT</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>ANGULAR</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>NODE JS</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>EXPRESS</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>MONGODB</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>GIT</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>HTML</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>CSS</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>BOOTSTRAP</Button>
                            <Button className='btn btn-primary mt-3 me-2 ' variant='outlined'>TAILWIND</Button>
                        </div>
                        <div className="mt-3">
                            <h5>Selected Skills:</h5>
                        </div>
                    </div>
                    <div className="mt-3">
                        <h4>Professional Summary</h4>
                        <Grid container spacing={2}>
                            <Grid size={12}>
                                <TextField
                                    label="Write a short summary of yourself"
                                    variant="standard"
                                    fullWidth
                                    multiline
                                    rows={4}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-danger' onClick={handleClose}>
                        Close
                    </button>
                    <button className='btn btn-success'>Update</button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Edit