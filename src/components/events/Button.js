function Button(props){
    // Passando o evento e o texto do botão
    return (
       <button onClick={props.event}>{props.text}</button> 
    )
}

export default Button