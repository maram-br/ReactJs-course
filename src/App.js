import './App.css';
import Dashboard from './componenets/content/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import EmployeeList from './componenets/employees/employeeList'
import Departments from './componenets/departments/department';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Employees" element={<EmployeeList />} />
          <Route path="/Departments" element={<Departments />} />


        </Routes>
    </div>
    </Router>

  );
}

export default App;
