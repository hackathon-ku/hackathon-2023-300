import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import SubmissionPage from './pages/SubmissionPage';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import TranscriptPage from './pages/TranscriptPage';
import AdminPage from './pages/AdminPage';




function App() {
  const [activeComponent, setActiveComponent] = useState("home")

  const renderComponent = () => {
    console.log('changing component')
    switch (activeComponent) {
      case 'home':
        return ;
      case 'transcript':
        return <TranscriptPage/>;
      case 'post':
        return <SubmissionPage/>;
      case 'admin':
        return <AdminPage/>
    }
  }

  return (
      <div className="NisitKU+"> 
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">NisitKU+</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> setActiveComponent('home')}>Home</Nav.Link>
            <Nav.Link onClick={()=> setActiveComponent('transcript')}>Transcript</Nav.Link>
            <Nav.Link onClick={()=> setActiveComponent('post')}>Post</Nav.Link>
            <Nav.Link onClick={()=> setActiveComponent('admin')}>Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
    {renderComponent()}

      </div>
  );
}

export default App;
