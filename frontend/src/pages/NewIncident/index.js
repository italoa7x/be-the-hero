import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident() {
    const history = useHistory();
    // armazenar/atualizar o estado dos valores de cada campo.
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');

    async function handleIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value,
        };

        function validationData(){
            if(title.length > 0 && description.length > 0 && value.length > 0){
                return true;
            }else{
                return false;
            }
        }

        try{
            if(validationData()){
                await api.post('/incidents', data, {
                    headers:{
                        Authorization: ongId,
                    }
                })
                history.push('/profile');
            }else{
                alert('Verique se todos os campos foram preenchidos.');
            }
        } catch(err) {
            alert('Erro ao cadastrar caso. Tente novamente.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home</Link>
                </section>

                <form onSubmit={handleIncident}>
                    <input placeholder="Título do caso" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição" 
                     value={description}
                     onChange={e => setDescription(e.target.value)}
                    />
                    <input placeholder="Valor em reais"
                     value={value}
                     onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}