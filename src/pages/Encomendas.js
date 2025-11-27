import React, { useState, useEffect, useCallback } from 'react';
import '../Encomendas.css';

const validarECalcularEncomendas = (lista) => {
    return lista.map(encomenda => {
        const qtde = parseFloat(encomenda.qtde);
        const unitario = parseFloat(encomenda.unitario);
        let total = 0;
        let qtdeDisplay = encomenda.qtde;  // Mantém o valor original como display se válido
        let unitarioDisplay = encomenda.unitario;  // Mantém o valor original como display se válido
        let isInvalida = false;

        if (isNaN(qtde) || qtde < 1) {
            qtdeDisplay = 'Qtde inválida!';
            isInvalida = true;
        }
        if (isNaN(unitario) || unitario < 1) {
            unitarioDisplay = 'Unidade inválida!';
            isInvalida = true;
        }
        if (!isInvalida) {
            total = calculaTotal(qtde, unitario);
            unitarioDisplay = formataValor(unitario);
        }

        return {
            ...encomenda,
            qtdeDisplay,
            unitarioDisplay,
            total: isInvalida ? '' : formataValor(total),
            isInvalida
        };
    });
};

// Função para calcular o total de uma encomenda
const calculaTotal = (qtde, unitario) => {
    return qtde * unitario;
};

// Função para formatar valores em R$
const formataValor = (valor) => {
    return parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

export default function Encomendas() {
    const [encomendas, setEncomendas] = useState([
        { nome: 'Carolina', produto: 'Divulgação Promocional', qtde: 1, unitario: 80, total: 0 },
        { nome: 'José', produto: 'Plano de Visibilidade', qtde: 'y', unitario: 120, total: 0 },  // Valores inválidos serão tratados
        { nome: 'Ana', produto: 'Sessões Fotográficas', qtde: 5, unitario: 80, total: 0 },
        { nome: 'João', produto: 'Parcerias c/ Influencidadores', qtde: 10, unitario: 'gd', total: 0 }  // Valores inválidos serão tratados
    ]);

    // Estado para o campo de busca
    const [busca, setBusca] = useState('');



    const [formData, setFormData] = useState({
        nome: '',
        produto: '',
        qtde: '',
        unitario: ''
    });

    const calcularInicial = useCallback(() => {
        setEncomendas(prev => validarECalcularEncomendas(prev));
    }, []);

    useEffect(() => {
        calcularInicial();
    }, [calcularInicial]);

    // Função para adicionar uma nova encomenda
    const adicionarEncomenda = (event) => {
        event.preventDefault();
        const novaEncomenda = {
            nome: formData.nome,
            produto: formData.produto,
            qtde: formData.qtde,  // Mantém como string (parseFloat lidará com isso)
            unitario: formData.unitario,  // Mantém como string
            total: 0
        };
        const listaAtualizada = [...encomendas, novaEncomenda];
        setEncomendas(validarECalcularEncomendas(listaAtualizada));
        setFormData({ nome: '', produto: '', qtde: '', unitario: '' });  // Limpa o formulário
    };

    // Função para remover uma encomenda (com animação)
    const removerEncomenda = (index) => {
        const listaAtualizada = encomendas.filter((_, i) => i !== index);
        setEncomendas(validarECalcularEncomendas(listaAtualizada));  // Recalcula após remoção
    };

    // Função para atualizar o estado do formulário
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Filtrar encomendas baseado na busca
    const encomendasFiltradas = encomendas.filter(encomenda =>
        encomenda.nome.toLowerCase().startsWith(busca.toLowerCase())
    );

    // botão de buscar API
    const buscarAPI = async () => {
        try {
            const resposta = await fetch("http://localhost:3001/encomendas_web");
            const dados = await resposta.json();

            const listaAtualizada = [...encomendas, ...dados];
            setEncomendas(validarECalcularEncomendas(listaAtualizada));

        } catch (erro) {
            console.error("Erro ao buscar API:", erro);
        }
    };


    return (
        <>
            <main>
                {/* Título */}
                <ul className="encomendas-titulo">
                    <li className="encomendas">Encomendas</li>
                </ul>

                {/* Campo de Busca */}
                <label className="Buscar">Buscar:</label>
                <input
                    type="text"
                    id="buscar"
                    placeholder="Digite o nome do cliente"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />

                {/* Tabela de Encomendas */}
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Valor Unitário</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody className="tabela-clientes">
                        {encomendasFiltradas.map((encomenda, index) => (
                            <tr
                                key={index}
                                className={`cliente ${encomenda.isInvalida ? 'info_invalida' : ''}`}
                                onDoubleClick={() => removerEncomenda(index)}
                            >
                                <td className="nome">{encomenda.nome}</td>
                                <td className="produto">{encomenda.produto}</td>
                                <td className="qtde">{encomenda.qtdeDisplay}</td>  {/* Usa o campo de display */}
                                <td className="unitario">{encomenda.unitarioDisplay}</td>  {/* Usa o campo de display */}
                                <td className="total">{encomenda.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button
                    className="botao_add"
                    onClick={buscarAPI}
                >
                    Buscar da API
                </button>
                
                {/* Formulário para Adicionar Encomenda */}
                <div className="formulario">
                    <ul className="encomendas-titulo">
                        <li className="encomendas">Adicionar Encomendas</li>
                    </ul>
                    <form id="frmEncomenda" onSubmit={adicionarEncomenda}>
                        <fieldset>
                            <legend>Dados da Encomenda</legend>
                            <label>Nome</label>
                            <input
                                type="text"
                                id="nomeCompleto"
                                name="nome"
                                required
                                placeholder="Digite o nome do(a) cliente"
                                value={formData.nome}
                                onChange={handleFormChange}
                            />

                            <label>Qtde:</label>
                            <input
                                type="number"
                                id="quantidade"
                                name="qtde"
                                required
                                placeholder="Digite a quantidade encomendada"
                                value={formData.qtde}
                                onChange={handleFormChange}
                            />

                            <label>Produto:</label>
                            <select
                                id="produto"
                                name="produto"
                                value={formData.produto}
                                onChange={handleFormChange}
                            >
                                <option value="">Selecione</option>
                                <option>Cadastro de Estabelecimentos</option>
                                <option>Divulgação Promocional</option>
                                <option>Planos de Visibilidade</option>
                                <option>Avaliações e Comentários</option>
                                <option>Sessões Fotográficas Profissionais</option>
                                <option>Parcerias com Influenciadores Locais</option>
                            </select>

                            <label>R$ Unitário</label>
                            <input
                                type="text"
                                id="valorUnitario"
                                name="unitario"
                                required
                                placeholder="Digite o valor unitário do produto"
                                value={formData.unitario}
                                onChange={handleFormChange}
                            />

                            <button id="botaoAdicionar" className="botao_add" type="submit">
                                Adicionar Encomenda
                            </button>
                        </fieldset>
                    </form>
                </div>
            </main>
        </>
    );
}