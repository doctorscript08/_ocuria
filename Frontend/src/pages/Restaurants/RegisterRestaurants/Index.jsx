import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import Input from "../../../components/Input/Input.jsx"
import "./resgisterRestaurants.css"


const ResgisterRestaurants = () => {

    const [formData, setFormData] = useState({
        nome_restaurante: "",
        nome_proprietario: "",
        categoria: "",
        email: "",
        telefone: "",
        password: "",
        password_confirm: "",
    });

    const [categorias, setCategorias] = useState([]); // Estado para armazenar as categorias
    
    const [message, setMessage] = useState("");

    // Buscar as categorias do backend quando o componente for montado
    useEffect(() => {

        const fetchCategorias = async () => {

            try {

                const response = await axios.get("/api/categorias-restaurantes/categorias_restaurantes");
                
                setCategorias(response.data); // Atualiza o estado com as categorias

            } catch (error) {

                console.error("Erro ao buscar categorias:", error);

                setMessage("Erro ao carregar categorias.");
            }
        };

        fetchCategorias();

    }, []);


    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData({

            ...formData,

            [name]: value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        // Verificar se as senhas coincidem
        if (formData.password !== formData.password_confirm) {

            setMessage("As senhas não coincidem.");

            return;
        }

        try {
            // Enviar os dados para o backend usando o axios
            const response = await axios.post("/api/cadastro_restaurantes", {

                nome_restaurante: formData.nome_restaurante,
                nome_proprietario: formData.nome_proprietario,
                categoria: formData.categoria,
                email: formData.email,
                telefone: formData.telefone,
                password: formData.password,
            });

             // Se o cadastro for bem-sucedido
            if (response.data.success) {

                setMessage("Restaurante cadastrado com sucesso!");

                // Limpar o formulário após o sucesso
                setFormData({

                    nome_restaurante: "",
                    nome_proprietario: "",
                    categoria: "",
                    email: "",
                    telefone: "",
                    password: "",
                    password_confirm: "",
                });
            } else {

                setMessage(response.data.message || "Erro ao cadastrar restaurante.");
            }
        } catch (error) {

            console.error("Erro ao enviar dados:", error);

            if (error.response) {

                // Erro retornado pelo backend
                setMessage(error.response.data.message || "Erro ao cadastrar restaurante.");

            } else {
                // Erro de conexão ou outro erro
                setMessage("Erro ao conectar com o servidor.");
            }
        }
    };


    return (
        <div>
            <section className="conteiner bg-white text-center p-4">

                <h1 className="text-black font-extrabold text-3xl uppercase">Cadastrar Restaurante</h1>

                <p className="font-semibold">Já tem um? <span><Link to="/login">Login</Link></span></p>

                {message && <p className="message">{message}</p>}

                <form className="form" onSubmit={handleSubmit}>

                    <Input type={"text"} name={"nome_restaurante"} id={"nome_restaurante"} placeholder={"Nome do restaurante"} icone={"fa-solid fa-utensils"} value={formData.nome_restaurante}
                    onChange={handleChange} />

                    <Input type={"text"} name={"nome_proprietario"} id={"nome_proprietario"} placeholder={"Nome do proprietário"} icone={"fa-regular fa-user"} value={formData.nome_proprietario}
                    onChange={handleChange} />

                    <div className="categorias">

                        <select
                            name="categoria"
                            id="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                        >
                            <option value="">Selecione uma categoria</option>

                              {/**{categorias.map((categoria) => (
                                <option key={categoria.id_categoria} value={categoria.id_categoria}>
                                    {categoria.nome}
                                </option>
                            ))} */}

                        </select>

                    </div>

                    <Input type={"email"} name={"email"} id={"email"} placeholder={"Email do restaurante"} icone={"fa-solid fa-envelope"} value={formData.email}
                        onChange={handleChange} />

                    <Input type={"text"} name={"telefone"} id={"telefone"} placeholder={"Contacto do restaurante"} icone={"fa-solid fa-phone"} value={formData.telefone}
                        onChange={handleChange} />

                    <Input type={"password"} name={"password"} id={"password"} placeholder={"Password"} icone={"fa-solid fa-lock"} value={formData.password}
                        onChange={handleChange} />

                    <Input type={"password"} name={"password_confirm"} id={"password_confirm"} placeholder={"Confirmar Password"} icone={"fa-solid fa-lock"} value={formData.password_confirm}
                        onChange={handleChange}/>

                    <Link to="/next" className="btn btn-sec"> Seguinte </Link>

                </form>

            </section>

        </div>
    )
}

export default ResgisterRestaurants