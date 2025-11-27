import React from 'react';

export default function Formulario({ formData, handleChange, handleSubmit }) {
    // O estado agora vem via props, então não precisamos gerenciar aqui
    return (
        
        <section id="formulario" className="formulario">
            <h2 className="titulo_formulario">Formulário de Contato</h2>
            <form id="frmContato" onSubmit={handleSubmit}>
                <fieldset className="sem-borda">
                    <legend>Dados Pessoais</legend>
                    
                    <label htmlFor="nomeCompleto">Nome completo</label>
                    <input type="text" id="nomeCompleto" required placeholder="Digite seu nome aqui" value={formData.nomeCompleto} onChange={handleChange} />

                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="seuemail@gmail.com" value={formData.email} onChange={handleChange} />

                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" placeholder="(xx)xxxx-xxxx" value={formData.telefone} onChange={handleChange} />

                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea id="mensagem" cols="70" rows="10" placeholder="Digite sua Mensagem"></textarea>

                    <label>Como prefere o nosso contato?
                        <div className="radio-group">
                            <label><input type="radio" name="contato" value="email" defaultChecked /> Email</label>
                            <label><input type="radio" name="contato" value="telefone" /> Telefone</label>
                            <label><input type="radio" name="contato" value="whatsapp" /> WhatsApp</label>
                        </div>
                    </label>

                    <label htmlFor="motivo">Qual o motivo do seu contato?</label>
                    <select id="motivo">
                        <option>Selecione</option>
                        <option>Dúvida</option>
                        <option>Sugestão</option>
                        <option>Elogio</option>
                        <option>Reclamação</option>
                    </select>
                </fieldset>

                <label className="checklabel">
                    <input type="checkbox" /> Gostaria de receber nossas novidades por email?
                </label>

                <input type="submit" id="enviar" value="Enviar formulário" className="enviar" /> 
            </form>
        </section>
    );
}