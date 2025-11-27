import '../App.css';
import img from '../assets/restaurante_home.png';

export default function Banner() {
    return <header className="banner">
        <img src={img} alt="Banner Rota Gastronômica" className="banner" />
    </header>
}