import React, { useState } from 'react'
function Animal() {

    const [name, setName] = useState('Cachorro')
    const [age, setAge] = useState(0)
    const [profession, setProfession] = useState('')
    const [data, setData] = useState('')
    return (
        <div>
            <h1>Animal</h1>
            <h2>Nome: {props.name}</h2>
            <h2>Idade: {props.age}</h2>
            <h2>Profissão: {props.profession}</h2>

        </div>)
}