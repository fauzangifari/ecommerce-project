// React Import
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages Import
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Homepage from './pages/HomePage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
