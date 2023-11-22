import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  ActivityItem  from '../components/ActivityItem'


const TranscriptPage = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"g
      />
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">NisitKU+</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Admin page</Nav.Link>
            <Nav.Link href="#pricing">Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
      <ActivityItem props = "/eventDetail"/>
      <ActivityItem />
      <ActivityItem/>
      
      
    </>
  )
}

export default TranscriptPage