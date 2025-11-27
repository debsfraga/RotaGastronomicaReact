import "./ProdutoCard.css";

export default function ProdutoCard({ nome, imagem, descricao, descricaoDetalhada, preco, imagens, abrir }) {
  return (
    <div className="card" onClick={() => abrir({ nome, descricao, descricaoDetalhada, preco, imagem, imagens })}>
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p>{descricao}</p>  {/* Descrição curta no card */}
      <span className="preco">{preco}</span>
    </div>
  );
}