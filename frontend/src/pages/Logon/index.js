import React from 'react';
import './styles.css';
import heroesImage from '../../assets/heroes.png';
import logoImage from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src = {logoImage} alt="Be The Hero"></img>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeHolder="Digite seu ID"/>
                    <button className="button" type="submit"Entrar>Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro</Link>
                </form>
            </section>

            <img src={ heroesImage } alt="Heroes"></img>
        </div>
    );
}