import React, { useState, useEffect } from 'react';
import './ProdutoModal.css';

export default function ProdutoModal({ produto, fechar }) {
    // --- 1. CHAMADA DOS HOOKS (DEVE VIR PRIMEIRO) ---
    const [indiceImagem, setIndiceImagem] = useState(0);

    // Reseta o índice da imagem
    useEffect(() => {
        setIndiceImagem(0);
    }, [produto]);
    
    // --- 2. VERIFICAÇÃO CONDICIONAL (DEVE VIR DEPOIS) ---
    if (!produto) { 
        return null;
    }
    // Dentro de ProdutoModal, logo após a verificação if (!produto)
console.log('Produto selecionado:', produto);  // Deve mostrar o objeto com descricaoDetalhada e preco
    // --- 3. LÓGICA DO SLIDER ---
    const imagens = produto.imagens || [];
    const totalImagens = imagens.length;
    const imagemAtual = imagens[indiceImagem];

    const proximaImagem = () => {
        setIndiceImagem((prev) => (prev + 1) % totalImagens);
    };

    const imagemAnterior = () => {
        setIndiceImagem((prev) => (prev - 1 + totalImagens) % totalImagens);
    };

    return (
        <div className="modal-overlay" onClick={fechar}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                
                <h1>{produto.nome}</h1>

                <div className="modal-image-container">
                    {/* Botão de navegação esquerda */}
                    {totalImagens > 1 && (
                        <button className="modal-nav-button left" onClick={imagemAnterior}>
                            &lt;
                        </button>
                    )}

                    {/* IMAGEM ATUAL */}
                    {imagemAtual && (
                        <img src={imagemAtual} alt={produto.nome} />
                    )}

                    {/* Botão de navegação direita */}
                    {totalImagens > 1 && (
                        <button className="modal-nav-button right" onClick={proximaImagem}>
                            &gt;
                        </button>
                    )}
                </div>

                <p>{produto.descricaoDetalhada}</p>  {/* Agora exibe a descrição DETALHADA */}
                <p>
                    <strong>Preço:</strong> {produto.preco}
                </p>

                <div className="modal-footer">
                    <button className="close-button" onClick={fechar}>
                        Fechar
                    </button>
                </div>
            </div>
        </div>
    );
}