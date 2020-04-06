import React, { useState } from 'react';
import './styles.css';
import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

export default function Logon(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('/sessions', { email, password });
            localStorage.setItem('ongId', response.data.id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        }catch(err){
            alert('Falha no login. Tente novamente.' + err)
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src = {logoImage} alt="Be The Hero"></img>
                <form onSubmit = {handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder="Digite seu e-mail." type="email" required={true}
                    value={email}
                    onChange={em => {setEmail(em.target.value)}}
                    />
                    
                    <input placeholder="Digite sua senha" type="password"  required={true}
                    value={password}
                    onChange={pass => {setPassword(pass.target.value)}}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro</Link>
                </form>
            </section>

            <img src={ heroesImage } alt="Heroes"></img>
        </div>
    );
}