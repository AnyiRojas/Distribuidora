import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCalendarDay, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-socials">
                    <p className="footer-title">Nuestras<span className="highlight"> Redes</span></p>
                    <div className="social-icons">
                        {/* Enlace directo a WhatsApp */}
                        <a href="https://wa.me/3222118028" className="social-icon" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                        <Link to="https://www.facebook.com/profile.php?id=100066451555506" className="social-icon">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>
                    </div>
                </div>

                <div className="footer-contact">
                    <p className="footer-title">Contáctenos</p>
                    <ul>
                        <li><FontAwesomeIcon icon={faPhone} /> +57 3222118028</li>
                        <li><FontAwesomeIcon icon={faCalendarDay} /> Lunes-Sábado</li>
                        <li><FontAwesomeIcon icon={faClock} /> 2am - 2pm</li>
                    </ul>
                </div>

                <div className="footer-flowers">
                    <p className="footer-title">Flores</p>
                    <ul>
                        <li>Rosas</li>
                        <li>Chirosas</li>
                        <li>Anturios</li>
                        <li>Gerberas</li>
                        <li>Lirios</li>
                        <li>Girasoles</li>
                    </ul>
                </div>

                <div className="footer-description">
                    <p className="footer-title">Somos su mejor opción</p>
                    <p>
                        Si está pensando enviar regalos, Distribuidora de flores Yesid es su mejor elección.
                        Nuestras Distribuidora ofrece regalos, arreglos florales, cajas de rosas
                        y otros tipos de flores que son entregados a domicilio en fechas tan
                        especiales como el día del amor y la amistad, día de la mujer, día de la madre,
                        cumpleaños, condolencias, entre otros.
                        <Link to="/QuienesSomos" className="footer-link">Mas información</Link>
                    </p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © 2024 Todos los derechos reservados | Construido con ❤ por
                    <Link to="/Terminos" className="footer-link">Términos y condiciones</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
