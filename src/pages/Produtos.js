import ProdutoCard from "../componentes/ProdutoCard/ProdutoCard";
import ProdutoModal from "../componentes/ProdutoModal/ProdutoModal";
import { useState } from "react";

import Balcao from "../assets/Balcao.png"; 
import Divulgacao1 from "../assets/divulgacao1.png";
import Divulgacao2 from "../assets/divulgacao2.png";
import Drinks from "../assets/drinks.png";
import Morangos from "../assets/morangos.png";
import Diferentes from "../assets/diferentes_tipos.png";
import Visibilidade from "../assets/visibilidade.png";
import Visibilidade2 from "../assets/visibilidade2.png";
import Visibilidade3 from "../assets/visibilidade3.png";
import Feedbacks from "../assets/feedbacks.png";
import Feedbacks1 from "../assets/feedbacks1.png";
import Feedbacks2 from "../assets/feedbacks2.png";
import Fotograficas from "../assets/fotograficas.png";
import Fotograficas2 from "../assets/fotograficas2.png";
import Fotograficas3 from "../assets/fotograficas3.png";
import Influencers from "../assets/influencers.png";
import Influencers2 from "../assets/influencers2.png";
import Influencers3 from "../assets/influencers3.png";

export default function Produtos() {
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const abrir = (produto) => setProdutoSelecionado(produto);
    const fechar = () => setProdutoSelecionado(null);

    return (
        <main>
            <h1 className="produtos-titulo">Produtos</h1>
            <p className="texto-produtos">
                Acreditamos que cada sabor conta uma história. Pensando nisso, criamos produtos e serviços para valorizar o seu restaurante ou bar, conectando você aos apaixonados por boa comida e bons momentos.
                <br></br>
                Conheça o que desenvolvemos especialmente para valorizar o seu negócio e atrair ainda mais clientes:
            </p>

            <div className="container">
                <ProdutoCard
                    nome="Cadastro de Estabelecimentos"
                    descricao="Oferecemos um espaço exclusivo para bares e restaurantes se cadastrarem em nossa plataforma, com direito a uma página personalizada e divulgação local."  // Descrição curta para o card
                    descricaoDetalhada="Destaque seu espaço na Rota mais gostosa da cidade! Cadastre seu restaurante ou bar na nossa plataforma e conquiste uma página exclusiva com fotos, descrição personalizada e visibilidade local. É o primeiro passo para atrair novos clientes e contar a sua história com sabor."  // Descrição detalhada para o modal
                    preco="Sob consulta"
                    imagem={Balcao}
                    imagens={[Balcao, Divulgacao1, Divulgacao2]}
                    abrir={abrir}
                />

                <ProdutoCard
                    nome="Divulgação Promocional"
                    descricao="Criamos campanhas para promover o seu negócio nas redes sociais e no nosso site. Alcance mais clientes com postagens atrativas e conteúdo estratégico."
                    descricaoDetalhada="A vitrine que o seu negócio merece. Criamos campanhas estratégicas com fotos incríveis, textos atrativos e aquele toque certeiro para chamar atenção nas redes sociais. Mais cliques, mais likes, mais clientes chegando!"
                    preco="R$ 80 / pacote com 4 posts"
                    imagem={Drinks}
                    imagens={[Drinks, Morangos, Diferentes]}
                    abrir={abrir}
                />

                <ProdutoCard
                    nome="Planos de Visibilidade"
                    descricao="Escolha entre diferentes planos mensais para destacar seu restaurante na página inicial, banners e listas recomendadas."
                    descricaoDetalhada="Seu restaurante no holofote certo. Escolha um plano que combine com seu ritmo e garanta presença nos lugares de destaque do nosso site — página inicial, banners e tops da região. Visibilidade sob medida pro seu sucesso!"
                    preco="R$ 120 / mês"
                    imagem={Visibilidade}
                    imagens={[Visibilidade, Visibilidade2, Visibilidade3]}
                    abrir={abrir}
                />

                <ProdutoCard
                    nome="Avaliações e Comentários"
                    descricao="Tenha acesso a feedbacks dos clientes e melhore seu atendimento com base em avaliações reais."
                    descricaoDetalhada="Feedback de verdade pra evolução constante. Receba comentários reais dos seus clientes e transforme cada experiência em melhoria. Saber o que o público pensa é a chave pra encantar ainda mais!"
                    preco="R$ 50 / mês"  // Corrigido conforme HTML
                    imagem={Feedbacks}
                    imagens={[Feedbacks, Feedbacks1, Feedbacks2]}
                    abrir={abrir}
                />

                <ProdutoCard
                    nome="Sessões Fotográficas Profissionais"
                    descricao="Oferecemos ensaios fotográficos do cardápio e do ambiente do local, deixando sua página ainda mais atrativa."
                    descricaoDetalhada="Comer com os olhos nunca fez tanto sentido. Dê vida ao seu cardápio e ao seu ambiente com cliques profissionais. De fotos de pratos a registros do espaço, sua vitrine digital vai brilhar como nunca!"
                    preco="R$ 25 a R$ 50 por sessão simples"  // Corrigido conforme HTML
                    imagem={Fotograficas}
                    imagens={[Fotograficas, Fotograficas2, Fotograficas3]}
                    abrir={abrir}
                />

                <ProdutoCard
                    nome="Parcerias com Influenciadores Locais"
                    descricao="Intermediamos parcerias com criadores de conteúdo da região para aumentar a visibilidade do seu negócio."
                    descricaoDetalhada="Conexão com quem influencia o seu público. A gente conecta o seu negócio a criadores de conteúdo da região que têm tudo a ver com seu estilo. Aumente o alcance da sua marca com campanhas reais, locais e cheias de sabor!"
                    preco="Sob consulta"
                    imagem={Influencers}
                    imagens={[Influencers, Influencers2, Influencers3]}
                    abrir={abrir}
                />
            </div>

            <ProdutoModal produto={produtoSelecionado} fechar={fechar} />
        </main>
    );
}