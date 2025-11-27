import '../App.css';
import img from '../assets/tatu_bola.jpg';


export default function SobreNos() {
    const data = new Date();
    const dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const mes = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    const dataTexto = `${dia[data.getDay()]}, ${data.getDate()} de ${mes[data.getMonth()]} de ${data.getFullYear()}`;

    return <main className="sobre-nos">
        <section className="sobre-nos">
            <h2 className="titulo_sobrenos">Sobre Nós</h2>
            <img src={img} alt="Rota Gastronômica" className="img_sobrenos" />
            <p>{dataTexto}</p>
            <p> <br />Bem-vindo ao Rota Gastronômica, seu guia definitivo para explorar os melhores restaurantes e barzinhos da cidade! Nosso objetivo é conectar você a experiências gastronômicas incríveis, apresentando desde os estabelecimentos mais tradicionais até os cantinhos escondidos que valem a pena conhecer.</p>
            <p>Aqui, você encontra recomendações cuidadosas, dicas exclusivas e informações detalhadas para tornar cada saída uma experiência única. Seja para um jantar especial, um happy hour descontraído ou para descobrir novos sabores, estamos aqui para ajudar você a encontrar o lugar perfeito!</p>
            <br />
            
            <p><i><b>Explore, descubra e saboreie com o Rota Gastronômica!</b></i></p>
        </section>
    </main>
}