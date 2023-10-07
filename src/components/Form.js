import {useState} from "react";

let Form = () =>  {
    const [email, setEmail] = useState('rafa@gmail.com');
    const [password, setPassword] = useState('');

    let cadastrarUsuario = (event) => {
        event.preventDefault()
        console.log(`Email: ${email}`)
        console.log(`password: ${password}`)
        // let formData = new FormData(event.target)
        // let data = Object.fromEntries(formData)
        console.log('Formulário enviado')
    //    console.log(data)

    }

    return (
        <>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                {/* <label>Nome: </label>
                <input type="text" name="name" /> */}
                <br />
                <label>Email: </label>
                <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                />
                <br /><br />
                <label>Senha: </label>
                <input 
                        type="password" 
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                {/* <label>Confirmação de Senha: </label>
                <input type="password" name="password_confirmation" /> */}
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}

export default Form;