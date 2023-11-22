import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import SubmissionPage from './pages/SubmissionPage';


function App() {
  return (
      <div className="NisitKU+">
        <h1>NisitKU+</h1>

        <nav>
          <ul>
            <li><Link to="/transcript">Transcript Page</Link></li> 
          </ul>
        </nav>

      </div>
  );
}

export default App;
