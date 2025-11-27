import React, { useState } from 'react';
import Formulario from "../componentes/Contato/Formulario";
import '../componentes/Contato/Formulario.css';


export default function Contato() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [returnMessage, setReturnMessage] = useState('');
    const [formData, setFormData] = useState({
        nomeCompleto: '',
        email: '',
        telefone: '',
    });

    // Função para atualizar formData
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    // Função de submissão
    const handleSubmit = (event) => {
        event.preventDefault();
        const { nomeCompleto, email, telefone } = formData;

        if (!email && !telefone) {
            alert('Por favor, preencha um e-mail e/ou um telefone para que possamos retornar o seu contato.');
            return;
        } else {
            const msg = `${nomeCompleto}, sua mensagem já está no nosso cardápio de prioridades! 😉 <br><br> Agradecemos o contato e vamos retornar em breve com uma resposta saborosa!`;
            setReturnMessage(msg);
            setIsSubmitted(true);
        }
    };

    // Função para resetar
    const handleReset = () => {
        setFormData({ nomeCompleto: '', email: '', telefone: '' });
        setIsSubmitted(false);
        setReturnMessage('');
    };

    return (
        <main>
            <ul className="contatos-titulo">
                <li className="contatos">Contato</li>
            </ul>
            {isSubmitted ? (
                // Se enviado, mostra apenas a divRetorno
                <div className="divRetorno" style={{ display: 'block' }}>
                    <p id="textoRetorno" dangerouslySetInnerHTML={{ __html: returnMessage }}></p>
                    <button onClick={handleReset} className="enviar">Enviar Outra Mensagem</button>
                </div>
            ) : (
                // Se não enviado, mostra o conteúdo normal + formulário
                <>
                    <h3 className="titulo_h3">Quer bater um papo com a gente?</h3>
                    <p className="texto-contatos">
                        Se você tem uma sugestão saborosa, encontrou um lugar incrível pra indicar ou só quer dizer um "oi", é só preencher o formulário abaixo.
                        <br></br><br></br>
                        Estamos sempre de olhos e ouvidos abertos pra tornar seu roteiro gastronômico ainda mais gostoso!
                    </p>
                    <Formulario
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </>
            )}
        </main>
    );
}