import '../App.css';
import img from '../assets/restaurante_belem.png';

export default function NossosProdutos() {
    return (
        <section className="nossos_produtos">
            <h2 className="titulo_nossosP">Nossos Produtos</h2>
            <div className="nossos_produtos_content">
                <ul className="lista">
                    <li>Experiências Gatronômicas</li>
                    <li>Pratos em Destaque</li>
                    <li>Parceiros e Ofertas Especiais</li>
                    <li>Rota de Sabores</li>
                </ul>
                <div className="img_nossosP">
                    <img src={img} alt="Nossos Produtos" />
                </div>
            </div>
        </section>
    );
}