import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Community from './pages/Community';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile/:username"
          element={<PrivateRoute><Profile /></PrivateRoute>}
        />
        <Route
          path="/portfolio"
          element={<PrivateRoute><Portfolio /></PrivateRoute>}
        />
        <Route
          path="/skills"
          element={<PrivateRoute><Skills /></PrivateRoute>}
        />
        <Route
          path="/projects"
          element={<PrivateRoute><Projects /></PrivateRoute>}
        />
        <Route
          path="/community"
          element={<PrivateRoute><Community /></PrivateRoute>}
        />
      </Routes>
    </div>
  );
}

export default App;