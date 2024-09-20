import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../index.css';

const QuienesSomosPage = () => {
    return (
        <div>
        <Header/>
        <div className="container1">
            <div>
                <h2>
                    <a href="/Main" className="home-link">
                        <i className="fa-solid fa-house"></i>
                    </a> / Quienes Somos
                </h2>
            </div>
            <div>
                <p>
                    La Distribuidora de Flores Yesid comenzó como un pequeño negocio familiar en 2017, con la visión de compartir la belleza
                    natural de las flores con todos. Nuestra misión siempre ha sido ofrecer productos florales de la más alta calidad.
                    A través de un arduo trabajo y dedicación, hemos transformado nuestro pequeño negocio en una de las principales
                    distribuidoras de flores del país. Nos guiamos por valores fundamentales como la excelencia, el servicio personalizado y
                    la sostenibilidad, asegurando que cada experiencia con nosotros sea inolvidable.
                </p><br /><br />
                <h2>Misión</h2>
                <p>
                    Nuestra misión es simple pero poderosa: transformar cada momento especial con la belleza y elegancia de nuestras flores.
                    Creemos en el impacto positivo que las flores pueden tener en la vida de las personas y nos esforzamos por ofrecer arreglos
                    florales visualmente impresionantes que transmitan emociones y sentimientos. Nos dedicamos a superar las expectativas de
                    nuestros clientes, proporcionando un servicio excepcional en cada paso del camino.
                </p><br /><br />
                <h2>Visión</h2>
                <p>
                    Ser reconocidos como la distribuidora líder de flores en el país, comprometida con la innovación, la sostenibilidad y la
                    satisfacción total del cliente. Queremos continuar creciendo y ofreciendo productos florales que no solo sorprendan y
                    deleiten, sino que también reflejen nuestro compromiso con la calidad y la responsabilidad ambiental.
                </p>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default QuienesSomosPage;
