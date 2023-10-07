
import { useState } from "react";
export default function Condicional(){
    const [email, setEmail] = useState('');

    const [userEmail, setUserEmail] = useState('')

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function clear(e){
        e.preventDefault()
        setUserEmail('')
    }

    return (
        <>
            <h1>Cadastre seu email</h1>
            <form>
                <input type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite sei email"></input>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                
            </form>
            {/* 
                    Se a variavel userEmail possuir valor, aparacerá uma mensagem indicando email e o botão de limpar, que reseta o valor userEmail     
            */}
            {userEmail && (
                <div>
                    <p>O email do usuário é: {userEmail}</p>
                    <button type="reset" onClick={clear}>Limpar Email</button>
                </div>
            )}
        </>
    )
}