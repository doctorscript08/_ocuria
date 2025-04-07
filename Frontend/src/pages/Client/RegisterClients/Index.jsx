import React, { useState } from 'react';
//import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Input from "../../../components/Input/Input.jsx";
import Submit from "../../../components/Submit/Submit.jsx";
import "./registerClients.css";

const RegisterClients = () => {
    const [formData, setFormData] = useState({
        username: '',
        nome_completo: '',
        genero: '',
        email: '',
        telefone: '',
        password: '',
        password_confirm: ''
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();

       

        if (formData.password !== formData.password_confirm) {
            setMessage("As senhas não coincidem!");
            return;
        }

        // Envio dos dados para o backend
        try {
            const response = await axios.post('http://localhost:3000/api/cadastro_clientes', {
                username: formData.username,
                nome_completo: formData.nome_completo,
                genero: formData.genero,
                email: formData.email,
                telefone: formData.telefone,
                password: formData.password
            });

            console.log('Resposta do backend:', response.data);

            if (response.status === 201) {
                setMessage('Cliente cadastrado com sucesso!');
                setFormData({
                    username: '',
                    nome_completo: '',
                    genero: '',
                    email: '',
                    telefone: '',
                    password: '',
                    password_confirm: ''
                });
                // Redireciona para a página de login após 2 segundos
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        } catch (error) {
            console.error('Erro na requisição:', error);

            if (error.response) {
                // O backend retornou um erro com status code
                setMessage(`Erro: ${error.response.data.message}`);
            } else if (error.request) {
                // A requisição foi feita, mas não houve resposta do backend
                setMessage('Erro: Não foi possível conectar ao servidor. Verifique sua conexão com a internet.');
            } else {
                
                setMessage('Erro: Ocorreu um problema ao processar a requisição.');
            }

     }

    };

    return (
        <div>
            <main>
                <section className="conteiner bg-white text-center p-4">

                    <h1 className="text-black font-extrabold text-3xl uppercase">Criar Conta</h1>

                    <p className="font-semibold">Já tem uma conta?  <span> <Link to="/Login">Login</Link> </span> </p>

                    {message && <div className="message">{message}</div>}

                    <form className="form" onSubmit={handleSubmit}>

                        <Input type="text" name="username" id="username" placeholder="Nome de usuário" icone="fa-regular fa-user" value={formData.username} onChange={handleChange} />
                        
                        <Input type="text" name="nome_completo" id="nome_completo" placeholder="Nome Completo" icone="fa-regular fa-user" value={formData.nome_completo} onChange={handleChange} />

                        <div className="genero">

                            <p className="text-xl">Género</p> 

                            <section>

                                <input type="radio" name="genero" id="masculino" value="M" onChange={handleChange} /> &nbsp;

                                <label htmlFor="masculino">Masculino</label> &nbsp;&nbsp;

                                <input type="radio" name="genero" id="feminino" value="F" onChange={handleChange} /> &nbsp;

                                <label htmlFor="feminino">Feminino</label> 

                            </section>

                        </div>

                        <Input type="email" name="email" id="email" placeholder="Email" icone="fa-solid fa-envelope" value={formData.email} onChange={handleChange} />

                        <Input
                            type="text"
                            name="telefone"
                            id="telefone"
                            placeholder="Nº de telefone"
                            icone="fa-solid fa-phone"
                            value={formData.telefone}
                            onChange={handleChange} // Usar handlePhoneChange aqui
                        />

                        <Input type="password" name="password" id="password" placeholder="Password" icone="fa-solid fa-lock" value={formData.password} onChange={handleChange} />

                        <Input type="password" name="password_confirm" id="password_confirm" placeholder="Confirmar Password" icone="fa-solid fa-lock" value={formData.password_confirm} onChange={handleChange} />

                        <Submit value="Cadastrar" name="cadastrar" id="cadastrar" />
                    </form>
                </section>
            </main>
        </div>
    );
}

export default RegisterClients