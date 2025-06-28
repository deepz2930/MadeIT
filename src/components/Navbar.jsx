import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
    };

    return (
        <nav className="bg-white dark:bg-gray-800 p-4 shadow-md flex justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-600">MadeIT</h1>
            <div className="flex gap-4 items-center">
                <Link to="/">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/community">Community</Link>
                <ThemeToggle />
                {user ? (
                    <>
                        <span className="text-sm text-gray-500">{user.email}</span>
                        <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link> {/* 👈 Add this line */}
                    </>
                )}

            </div>
        </nav>
    );
};

export default Navbar;