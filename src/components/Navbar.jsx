import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="nav-link" to="/se180037/all-lessons">All Lessons</Link>
        <Link className="nav-link" to="/se180037/completed-lessons">Completed Lessons</Link>
      </div>
    </nav>
  );
}
