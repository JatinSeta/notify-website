import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserPage from './components/UserPage/UserPage.tsx';
import Home from './components/Home.tsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can add more routes as needed, for example: */}
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}
