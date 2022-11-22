import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <>
    <header className="header">
      <div className="header-container _container">

        <div className="header-logo">
            <p className="header-logo__Avent">Avent</p>
            <p className="header-logo__Board">Board</p>
        </div>
        <nav className="navbar">
          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to="/schedule" className="navbar-link">Schedule</Link>
            </li>
            <li>
              <Link to="/staff" className="navbar-link">Staff</Link>
            </li>
            <li>
              <Link to="/calendar" className="navbar-link">Calendar</Link>
            </li>
            <li>
              <Link to="/finance" className="navbar-link">Finance</Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-auth-buttons">
          <button className="navbar-lk">Личный кабинет</button>
          <Link to="/auth" >
            <button className="navbar-registration">Регистрация</button>
          </Link>
        </div>
      </div>
    </header>

      <Outlet />

      <footer className="footer">
        footer here
      </footer>
    </>
  )
};

export default Layout;