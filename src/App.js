import './App.css';
import Dashboard from './componenets/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 


function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
    </div>
    </Router>

  );
}

export default App;
