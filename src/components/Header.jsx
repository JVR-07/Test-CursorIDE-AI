import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <h1>DevPlatform</h1>
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/developers">Desarrolladores</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
          <div className="auth-buttons">
            {user ? (
              <div className="user-menu">
                <span className="user-name">Hola, {user.name}</span>
                {user.role === 'developer' && (
                  <span className={`availability-badge ${user.availability.toLowerCase()}`}>
                    {user.availability}
                  </span>
                )}
                <button onClick={handleLogout} className="logout-btn">
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <>
                <Link to="/login" className="login-btn">Iniciar Sesión</Link>
                <Link to="/register" className="register-btn">Registrarse</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 