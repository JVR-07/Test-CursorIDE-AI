import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          PlataformaDevs
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/developers" className="nav-link">Desarrolladores</Link>
          <Link to="/projects" className="nav-link">Proyectos</Link>
          <Link to="/contact" className="nav-link">Contacto</Link>
        </nav>
        <div className="auth-section">
          {user ? (
            <div className="user-menu">
              <span className="user-name">Hola, {user.name}</span>
              {user.role === 'developer' && user.availability && (
                <span className={`availability-badge ${user.availability.toLowerCase()}`}>
                  {user.availability}
                </span>
              )}
              <button onClick={handleLogout} className="logout-btn">
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-btn">Iniciar Sesión</Link>
              <Link to="/register" className="register-btn">Registrarse</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 