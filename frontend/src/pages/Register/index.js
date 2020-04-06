import React, { useState } from 'react';
import ReactInputMask from 'react-input-mask'; 
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf,  setUf] = useState('');
    const [password,  setPassword] = useState('');

    const history = useHistory();
    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            password,
            whatsapp,
            city,
            uf
        };
        try {
            const response = await api.post('ongs', data);
            if(response.data.id != null) {
                alert('ONG cadastrada com sucesso!');
            }
            history.push('/');
        } catch(err){
            alert(`Erro no cadastro, tente novamente`)
        }

    }
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude a encontrar os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar pra home</Link>
                </section>

                <form onSubmit = {handleRegister}>
                    <input
                        placeholder="Nome da ONG" required={true}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input type="email" required={true}
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                   
                    <input type="password" required={true}
                        placeholder="Senha"
                        value={password}
                        onChange={pass => setPassword(pass.target.value)}
                    />

                    <ReactInputMask type="tel" mask="(99)9-9999-9999" maskChar={null}
                        placeholder="WhatsApp" required={true} 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade" required={true}
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input
                            placeholder="UF" style={{ width: 80 }} minLength="2" maxLength="2" required={true}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}