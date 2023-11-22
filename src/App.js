import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TranscriptPage from './pages/TranscriptPage';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/">
              <TranscriptPage/>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
