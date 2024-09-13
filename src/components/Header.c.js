import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Asegúrate de que este import es correcto
import '../index.css';
import logo from '../static/img/Logo.png';

const Headerc = () => {
    const [isAccountOpen, setAccountOpen] = useState(false);
    const [isSpecialDatesOpen, setSpecialDatesOpen] = useState(false);
    const [user, setUser] = useState(null); // Estado para almacenar la información del usuario
    const [logoutMessage, setLogoutMessage] = useState(''); // Estado para el mensaje de cierre de sesión
    const accountRef = useRef(null);
    const specialDatesRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUser(decoded); // Guarda la información del usuario decodificada
            } catch (e) {
                console.error('Error decodificando el token', e);
                localStorage.removeItem('token');
            }
        }
    }, []);

    const toggleAccountDropdown = () => {
        setAccountOpen(!isAccountOpen);
        setSpecialDatesOpen(false);
    };

    const toggleSpecialDatesDropdown = () => {
        setSpecialDatesOpen(!isSpecialDatesOpen);
        setAccountOpen(false);
    };

    const closeAllDropdowns = () => {
        setAccountOpen(false);
        setSpecialDatesOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                (accountRef.current && accountRef.current.contains(event.target)) ||
                (specialDatesRef.current && specialDatesRef.current.contains(event.target))
            ) {
                return;
            }
            closeAllDropdowns();
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
        setLogoutMessage('Cierre de sesión exitoso');
        setUser(null); // Limpia el estado del usuario
        setTimeout(() => {
            setLogoutMessage('');
            navigate('/'); // Redirige a la página de inicio o a una página específica
        }, 1000); // 3 segundos para mostrar el mensaje
    };

    return (
        <header>
            <div className="top-bar">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Distribuidora de Flores Yesid" /></Link>
                    <p>Distribuidora de Flores Yesid</p>
                </div>
                <div className="account-cart">
                    <div className="cart">
                        <Link to="/car">
                            <button type="button"><i className="fas fa-shopping-cart"></i> 0 ARTÍCULO(S) - $0</button>
                        </Link>
                    </div>
                    <div className="account" ref={accountRef} onClick={toggleAccountDropdown}>
                        <i className="fas fa-user"></i> MI CUENTA
                        <div className={`dropdown ${isAccountOpen ? 'active' : ''}`}>
                            {user ? (
                                <>
                                    <Link to="/myaccount">Mi Cuenta <i className="fa fa-user" aria-hidden="true"></i></Link>
                                    <Link to="/purchasepage">Historial de Pedidos <i className="fa fa-box" aria-hidden="true"></i></Link>
                                    <Link to="#" onClick={handleLogout}>Cerrar sesión <i className="fa fa-sign-out-alt" aria-hidden="true"></i></Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/register">Registrarse <i className="fa fa-unlock-alt" aria-hidden="true"></i></Link>
                                    <Link to="/login">Acceder <i className="fa fa-user" aria-hidden="true"></i></Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <ul>
                    <li className="special-dates" ref={specialDatesRef}>
                        <Link to="#" className="toggle-special-dates" onClick={toggleSpecialDatesDropdown}>
                            FECHAS ESPECIALES <i className="fa fa-bars" aria-hidden="true"></i>
                        </Link>
                        <ul className={`dropdown special-dates-dropdown ${isSpecialDatesOpen ? 'active' : ''}`}>
                            <li><Link to="/DiaMujer"><i className="fa fa-female" aria-hidden="true"></i> Día de la Mujer</Link></li>
                            <li><Link to="/DiaMadre"><i className="fa fa-heart" aria-hidden="true"></i> Día de la Madre</Link></li>
                            <li><Link to="/Aniversario"><i className="fa fa-cake-candles" aria-hidden="true"></i> Aniversario</Link></li>
                            <li><Link to="/AmorAmistad"><i className="fa fa-heart" aria-hidden="true"></i> Amor y Amistad</Link></li>
                            <li><Link to="/Cumpleaños"><i className="fa fa-birthday-cake" aria-hidden="true"></i> Cumpleaños</Link></li>
                            <li><Link to="/Condolencias"><i className="fa fa-sad-tear" aria-hidden="true"></i> Condolencias</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="#">FLORES <i className="fa fa-chevron-down"></i></Link>
                        <div className="dropdown flower-submenu">
                            <div className="menu-column">
                                <ul className="column category">
                                    <li><Link to="/Rosas">Rosas</Link></li>
                                    <li><Link to="/Astromelias">Astromelias</Link></li>
                                    <li><Link to="/Anturios">Anturios</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <ul className="column category">
                                    <li><Link to="/Gerberas">Gerberas</Link></li>
                                    <li><Link to="/Lirios">Lirios</Link></li>
                                    <li><Link to="/Girasoles">Girasoles</Link></li>
                                </ul>
                            </div>
                            <div className="menu-column">
                                <ul className="column category">
                                    <li><Link to="/Chirosas">Chirosas</Link></li>
                                    <li><Link to="/Maracas">Maracas</Link></li>
                                    <li><Link to="/Coquetas">Coquetas</Link></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="/Eventos">EVENTOS <i className="fa fa-angle-down"></i></Link>
                        <ul className="dropdown">
                            <li className="dropdown-item"><Link to="/Eventos">Eventos</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/QuienesSomos">QUIÉNES SOMOS <i className="fa fa-angle-down"></i></Link>
                    </li>
                </ul>
            </nav>
            {logoutMessage && (
                <div className="logout-message">
                    {logoutMessage}
                </div>
            )}
        </header>
    );
};

export default Headerc;