import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                 <section>
                     <img src= {logoImg} alt="Be The Hero"/>
                     <h1>Cadastro</h1>
                     <p>Faça seu cadastro, entre na plataforma e ajude a encontrar os casos da sua ONG.</p>
                     <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar pra home</Link>
                 </section>
                 
                 <form >
                     <input placeholder="Nome da ONG"/>
                     <input type="email" placeholder="E-mail"/>
                     <input placeholder="WhatsApp"/>

                     <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style = {{ width: 80 }}/>
                     </div>

                <buton className="button" type="submit">Cadastrar</buton>
                 </form>
            </div>
        </div>
    );
}