import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white dark:bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600">MadeIT</h1>

        {/* Hamburger button - visible on mobile */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // X icon when menu is open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Nav links container */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center w-full md:w-auto md:gap-4 ${
            isOpen ? 'flex mt-4 md:mt-0' : 'hidden md:flex'
          }`}
        >
          <Link
            to="/"
            className="block px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/portfolio"
            className="block px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            to="/skills"
            className="block px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="block px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/community"
            className="block px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-purple-600"
            onClick={() => setIsOpen(false)}
          >
            Community
          </Link>

          <ThemeToggle />

          {user ? (
            <div className="flex flex-col md:flex-row md:items-center md:gap-4 mt-4 md:mt-0">
              <span className="text-sm text-gray-500 break-all">{user.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded mt-2 md:mt-0"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row md:items-center md:gap-4 mt-4 md:mt-0">
              <Link
                to="/login"
                className="block px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-2 py-1 text-gray-700 dark:text-gray-200 hover:text-purple-600"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
