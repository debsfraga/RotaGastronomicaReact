import '../App.css';
import imgRodape from '../assets/rota2.png';

export default function Footer(){
    return <footer className="footer">
        <img className="logo_rodape" src={imgRodape} alt="Rota Gastronômica" />
        <p>Compartilhe seu restaurante ou bar conosco: <a href="mailto:rota_gastronomica@gamil.com"><i className="fa fa-envelope "></i></a> rota_gastronomica@gmail.com </p>
        <p>Siga a gente no instagram! <a href="https://instagram.com/rotagastronomica"><i className="fa fa-instagram"></i></a> @rota_gastronomica</p>
    </footer>
}