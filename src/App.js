import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import TranscriptPage from './pages/TranscriptPage';
import SubmissionPage from './pages/SubmissionPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <HomePage />;
      case 'transcript':
        return <TranscriptPage />;
      case 'post':
        return <SubmissionPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return null;
    }
  };

  return (
    <div className="background">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="">NisitKU+</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link onClick={() => setActiveComponent('home')}>Home</Nav.Link>
              <Nav.Link onClick={() => setActiveComponent('transcript')}>Activity</Nav.Link>
              <Nav.Link onClick={() => setActiveComponent('post')}>Post</Nav.Link>
              <Nav.Link onClick={() => setActiveComponent('admin')}>Admin</Nav.Link>
              {/* Add more Nav.Link items as needed */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {renderComponent()}
    </div>
  );
}

export default App;
