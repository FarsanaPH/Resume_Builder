import React from 'react'
import { Divider } from '@mui/material'
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';
import { Link } from 'react-router-dom';


function Preview() {
  return (
    <>
      <div className='d-flex justify-content-end gap-3 mt-5'>
        <button className='btn btn-primary'><FaFileDownload /></button>
        <Link to={"/history"} className='btn btn-primary'><FaHistory /></Link>
        <Edit />  {/* calling component Edit here */}
        <Link to={"/"} className='btn btn-primary'>BACK</Link>
      </div>
      <div className="mx-5 my-3 shadow-lg px-5 pb-5">
        <div>
          <div className="text-center">
            <h3 className="pt-3">FARSANA PH</h3>
            <span className='pt-2 text-primary'>WEB DEVELOPER</span>
          </div>
          <div className='text-center mt-2'>
            <h6>7994561523 | farsana@gmail.com | Kochi</h6>
          </div>
          <div className="mt-2 text-center">
            <a href="" className="me-3 ms-3">GitHub</a>
            <a href="" className="me-3 ms-3">LinkedIn</a>
            <a href="" className="me-3 ms-3">Portfolio</a>
          </div>
        </div>
        <div className='mt-3'>
          <Divider>Summary</Divider>
          <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam aut, accusantium illum laboriosam voluptas blanditiis dolorum maiores odit quia culpa fuga, vitae sapiente impedit minima facere asperiores reiciendis minus similique!</p>
        </div>
        <div className='mt-3 text-center'>
          <Divider>Education</Divider>
          <h6 className='mt-2'>B.Tech</h6>
          <h6>PR College of Eng | Anna University | 2025</h6>
        </div>
        <div className='mt-3 text-center'>
          <Divider>Professional Experience</Divider>
          <h6 className='mt-2'>MERN FULL STACK</h6>
          <h6>Luminar Technolab | Luminar Technolab | 6months</h6>
        </div>
        <div className='mt-3 text-center'>
          <Divider>Skills</Divider>
          <h6 className='mt-2'>MERN FULL STACK</h6>
          <h6>Luminar Technolab | Luminar Technolab | 6months</h6>
          <div className="m-2">
            <button className="btn btn-primary me-3 mt-3">HTML</button>
            <button className="btn btn-primary me-3 mt-3">HTML</button>
            <button className="btn btn-primary me-3 mt-3">HTML</button>
            <button className="btn btn-primary me-3 mt-3">HTML</button>
            <button className="btn btn-primary me-3 mt-3">HTML</button>
            <button className="btn btn-primary me-3 mt-3">HTML</button>
            <button className="btn btn-primary me-3 mt-3">HTML</button>
            <button className="btn btn-primary me-3 mt-3">HTML</button>
            <button className="btn btn-primary me-3 mt-3">HTML</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Preview