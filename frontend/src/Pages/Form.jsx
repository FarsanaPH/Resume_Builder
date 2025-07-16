import React from 'react'
import StepperComponent from '../Components/StepperComponent'
import Preview from '../Components/Preview'

function Form() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <StepperComponent />
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