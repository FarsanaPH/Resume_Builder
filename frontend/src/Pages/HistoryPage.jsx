import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function HistoryPage() {
  return (
    <>
      <div className='py-3 container'>
        <h1 className="text-center py-4">Resume Downloaded History</h1>
        <div className="d-flex justify-content-end me-3">
          <Link to={"/form"}><button className='btn btn-primary'>BACK</button></Link>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Card style={{ width: '100%' }}>
              <Card.Body>
                <Card.Title>Full Name</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">FULLSTACK DEVELOPER</Card.Subtitle>
                <Card.Title>Course</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">COLLEGE | UNIVERSITY | 2025</Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default HistoryPage