import React, { useState } from 'react'
import StepperComponent from '../Components/StepperComponent'
import Preview from '../Components/Preview'

function Form() {
    const [resumeData,setResumeData] = useState({
        name : "",
        jobTitle : "",
        location : "",
        email : "",
        phoneNumber : "",
        github : "",
        linkedIn : "",
        portfolio : "",
        courseName : "",
        college : "",
        university : "",
        year : "",
        jobRole : "",
        company : "",
        companyLocation : "",
        duration : "",
        skills : [],
        summary : ""

    })
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <StepperComponent resumeData={resumeData} setResumeData={setResumeData} />
                    </div>
                    <div className="col-md-6">
                        <Preview />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form 