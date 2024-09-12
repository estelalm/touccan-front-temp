import React, { useState } from 'react'
import './App.css'


const baseUrl = 'http://localhost:8080/1.0/touccan'
function App() {

    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    });

    // //validar erros
    // const [erros, setErros] = useState({})

    // //validar o formulário
    // const validateForm = () => {
    //     const novosErros = {}

    //     // validação de e-mail
    //     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    //     if (!emailRegex.test(formData.email)) {
    //         novosErros.email = "E-mail inválido";
    //     }

    //     //validação de senha
    //     const senhaRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    //     if (!senhaRegex.test(formData.senha)) {
    //         novosErros.senha = "A senha deve ter no mínimo 8 caracteres, incluindo números, letra maiúscula e um caractere especial"
    //     }

    //     setErros(novosErros)

    //     return Object.keys(novosErros).length === 0
    // }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        setFormData({ ...formData, [name]: formattedValue });
      };

    const handleSubmit = (event) => {
        event.prefentDefault()

        console.log("Dados a serem enviados:", dados);

        fetch(`${baseUrl}/login/usuario?email=${formData.email}&senha=${formData.senha}`,{
            method: 'GET'
        }).then(response => response.json())
        .then(data => {console.log("data")})
        .catch(error => {
            console.error("Erro:" + error)
        })
    }

    return (

        <div>
            <div className='container'>
                <div className="decoracaoLaranja"></div>
                <div className="decoracaoCinza"></div>
                <div className="decoracaoCinza2"></div>
                <div className="logoPrincipal">
                    <img src='../img/logoPrincipal.svg' alt="" />
                </div>
            </div>

            <div className='app-container'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <img src="./img/email.png" alt="" />
                        <input type="text" name='email' placeholder='E-mail'
                        />
                    </div>
                    <div className="input-container">
                        <img src="./img/senha.png" alt="" />
                        <input type="password" name='senha' placeholder='Senha' />
                    </div>
                    <button type='submit'>Entrar</button>
                </form>
            </div>

        </div>



    )
}

export default App