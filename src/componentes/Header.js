import { useState } from 'react';
import '../App.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";

export default function Header(){
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return <header>
        <div className="divHeader">
            <img src={logo}  alt="Rota Gastronômica" className="logo"/>

            {/* Botão hamburguer para mobile */}
            <button className="menu-toggle" onClick={alternarMenu}>
                ☰
            </button>
            
            <nav className={menuAberto ? 'menu ativo' : 'menu'}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li> | </li>
                    <li><Link to="/encomendas">Encomendas</Link></li>
                </ul>
            </nav>
        </div>
    </header>
}