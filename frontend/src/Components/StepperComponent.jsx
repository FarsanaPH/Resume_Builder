import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];

function StepperComponent() {
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

    // from array steps
    const renderStepperContent = (steps) => {
        switch (steps) {
            case 0: return (
                <>
                    <h5>Personal Information</h5>
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

                </>
            );
            case 1: return (
                <>
                    <h5>Contact Details</h5>
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
                </>
            );
            case 2: return (
                <>
                    <h5>Education Details</h5>
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
                </>
            );
            case 3: return (
                <>
                    <h5>Professional Details</h5>
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
                </>
            );
            case 4: return (
                <>
                    <h3>Skills & Certifications</h3>
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
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>REACT</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>ANGULAR</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>NODE JS</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>EXPRESS</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>MONGODB</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>GIT</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>HTML</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>CSS</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>BOOTSTRAP</Button>
                        <Button className='btn btn-primary mt-3 me-2' variant='outlined'>TAILWIND</Button>
                    </div>
                    <div className="mt-3">
                        <h5>Added Skills:</h5>
                    </div>
                </>
            );
            case 5: return (
                <>
                    <h5>Professional Summary</h5>
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
                </>
            );
            default: return null;
        }

    }
    return (
        <>
            <Box sx={{ width: '100%', marginBottom:"55%" }}>
                <Stepper activeStep={activeStep}>
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
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {/* this is where we chnge to see on the webpage */}
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
        </>
    );
}

export default StepperComponent;
