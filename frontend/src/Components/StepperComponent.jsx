import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { TiDelete } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";
import { addResumeAPI } from '../Service/allApi';


const steps = ['Basic Information',
    'Contact Details',
    'Education Details',
    'Work Experience',
    'Skills & Certifications',
    'Review & Submit'];

function StepperComponent({ resumeData, setResumeData }) {
    console.log(resumeData);
    const { skills } = resumeData //destructing  means skills=resumeData.skills
    console.log("skill is", skills);


    const [inputSkill, setInputSkill] = useState("")
    console.log("inputting skill is", inputSkill);

    const addSkill = (addSkill) => {
        console.log("added skills from add function is:", addSkill);
        if (!addSkill) { //ie, null,undefined or empty string added
            alert(`Enter Skill!!`)
        }
        else {
            if (skills.includes(addSkill)) {
                alert(`Skill already added...`)
            } else {
                setResumeData({ ...resumeData, skills: [...skills, addSkill] })
            }
            setInputSkill("")
        }
    }

    const deleteSkill = (itemToDelete) => {
        console.log("deleting skill:", itemToDelete);
        setResumeData({ ...resumeData, skills: skills.filter(item => item !== itemToDelete) })
    }


    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmitResume = async () => {
        const result = await addResumeAPI(resumeData) //API calling
        console.log("backend db.json stored data:", result);

        // Show success popup
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 1500); // hide after 2 seconds
    }

    const suggestion = ["REACT", "ANGULAR", "NODE JS", "EXPRESS", "JAVASCRIPT", "MONGO DB", "GIT", "HTML", "CSS", "BOOTSTRAP", "TAILWIND"]


    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    // The called renderStepperContent function from below which is seen on webpage
    // if we click NEXT, setactivesteps  increments and when we click BACk, setactivesteps decrements
    const renderStepperContent = (stepIndex) => {
        switch (stepIndex) {
            case 0: return (
                <>
                    <h5>Personal Information</h5>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, name: e.target.value })}
                                value={resumeData.name}
                                label="Full Name"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, jobTitle: e.target.value })}
                                value={resumeData.jobTitle}
                                label="Job Title"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, location: e.target.value })}
                                value={resumeData.location}
                                label="Location"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>

                    </Grid>

                </>
            );
            case 1: return (
                <>
                    <h5>Contact Details</h5>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, email: e.target.value })}
                                value={resumeData.email}
                                label="Email"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, phoneNumber: e.target.value })}
                                value={resumeData.phoneNumber}
                                label="Phone Number"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, github: e.target.value })}
                                value={resumeData.github}
                                label="GitHub Profile Link"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, linkedIn: e.target.value })}
                                value={resumeData.linkedIn}
                                label="LinkedIn Profile Link"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, portfolio: e.target.value })}
                                value={resumeData.portfolio}
                                label="Portfolio Link"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </>
            );
            case 2: return (
                <>
                    <h5>Education Details</h5>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, courseName: e.target.value })}
                                value={resumeData.courseName}
                                label="Course Name"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, college: e.target.value })}
                                value={resumeData.college}
                                label="College Name"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, university: e.target.value })}
                                value={resumeData.university}
                                label="University"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, year: e.target.value })}
                                value={resumeData.year}
                                label="Year of Passout"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </>
            );
            case 3: return (
                <>
                    <h5>Professional Details</h5>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, jobRole: e.target.value })}
                                value={resumeData.jobRole}
                                label="Job or Internship"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, company: e.target.value })}
                                value={resumeData.company}
                                label="Company Name"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, companyLocation: e.target.value })}
                                value={resumeData.companyLocation}
                                label="Location"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, duration: e.target.value })}
                                value={resumeData.duration}
                                label="Duration"
                                maxRows={4}
                                variant="standard"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </>
            );
            case 4: return (
                <>
                    <h3>Skills & Certifications</h3>
                    <TextField
                        onChange={(e) => setInputSkill(e.target.value)}
                        value={inputSkill}
                        label="Add Skill"
                        maxRows={4}
                        variant="standard"
                        multiline
                        fullWidth
                    />
                    <Button onClick={() => addSkill(inputSkill)} className='btn btn-primary mt-3' variant='outlined'>ADD+</Button>

                    <div className="mt-3">
                        <h5>Suggestions :</h5>
                        {
                            suggestion?.map((item) => (
                                <Button onClick={() => addSkill(item)} className='btn btn-primary mt-3 me-2' variant='outlined'>{item}</Button>
                            ))
                        }
                    </div>

                    <div className="mt-3">
                        <h5>Added Skills:</h5>
                        {
                            skills?.length > 0 ?
                                skills?.map((item) => (
                                    <span className='btn btn-primary mb-3 me-3'>{item}
                                        <button onClick={() => deleteSkill(item)} className='btn btn-primary'>
                                            <TiDelete />
                                        </button>
                                    </span>
                                )) : ""
                        }
                    </div>
                </>
            );
            case 5: return (
                <>
                    <h5>Professional Summary</h5>
                    <Grid container spacing={2}>
                        <Grid size={12}>
                            <TextField
                                onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                                value={resumeData.summary}
                                label="Write a short summary of yourself"
                                variant="standard"
                                fullWidth
                                multiline
                                rows={4}
                            />
                        </Grid>
                    </Grid>
                </>
            );
            default: return null;
        }
    }

    
    return (
        <>
            <Box sx={{ width: '100%', marginBottom: "55%" }}>
                <Stepper activeStep={activeStep}>
                    {/* here used the array steps */}
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        // if (isStepOptional(index)) {
                        //     labelProps.optional = (
                        //         <Typography variant="caption">Optional</Typography>
                        //     );
                        // }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 2 }}>
                            <button onClick={handleReset} className='btn btn-danger'>RESET</button>
                            <button onClick={handleSubmitResume} className='btn btn-success'>SUBMIT RESUME</button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {/* This is where we change to see on the webpage */}
                        {renderStepperContent(activeStep)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>

            {showSuccess && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
                    <div className="bg-success text-white p-4 rounded text-center shadow">
                        <FaCheckCircle size={60} className="mb-3 bg-white text-success rounded-circle p-1" />
                        <h5>Resume Submitted Successfully!</h5>
                    </div>
                </div>
            )}
        </>
    );
}

export default StepperComponent;
