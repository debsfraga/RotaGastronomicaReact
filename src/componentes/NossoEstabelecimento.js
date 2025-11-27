import '../App.css';

export default function NossoEstabelecimento() {
    return <main className="nosso-estabelecimento">
        <section className="nosso-estabelecimento">
            <h2 className="titulo_sobrenos">Nosso Estabelecimento</h2>
            <p>Nosso estabelecimento é um espaço acolhedor e moderno, projetado para proporcionar uma experiência gastronômica única. Com uma decoração elegante e ambiente confortável, oferecemos o cenário perfeito para desfrutar de refeições deliciosas com amigos e familiares.</p>
            <p>Localizado em uma área de fácil acesso, nosso restaurante conta com uma equipe dedicada e atenciosa, pronta para atender todas as suas necessidades. Venha nos visitar e descubra por que somos o destino preferido para os amantes da boa comida!</p>
            <div>
                <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8653098296363!2d-46.561209823950804!3d-23.64499416467147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4328c992748f%3A0xcea3c3e698444297!2sSENAI%20S%C3%A3o%20Caetano%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1740608280602!5m2!1spt-BR!2sbr" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    </main>
}