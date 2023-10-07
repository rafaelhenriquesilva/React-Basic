import { useState } from "react";
import Button from "./events/Button";
import ChildrenPassValueToEvent from "./events/ChildrenPassValueToEvent";
import PropTypes from 'prop-types';

function Evento({ numero }) {
    // Criando uma variavel auxiliar que é a cópia do numero passado para ser manipulada no click do componente Filho callEvent
    let [numbercopy, setNumberCopy] = useState(numero)
    // Evento criado na classe PAI, que será executado na classe filho
    const callEvent = (event) => {
        setNumberCopy(numbercopy + 1)
    }

    const [data, setData] = useState('');

    // Função que será executada no cmp filho e o cmp pai receberá o retono
    const childToParent = (childdata) => {
        setData(childdata);
        console.info(`Info do evento Filho`)
        console.info(childdata)
    }

    const clear = (e) => {
        e.preventDefault()
        setData()
    }

    return (
        <>
            <p>Clique para disparar o evento {numbercopy + 1}</p>
            <Button text="Ativar" event={callEvent}> </Button>
            <p>Disparou até no EVENTO {numbercopy}</p>
            <hr></hr>



            <h3>Filho passa valor pro pai</h3>
            <ChildrenPassValueToEvent childToParent={childToParent}></ChildrenPassValueToEvent>

            {/* Se existir data exibir */}
            {data && (
                <>
                    <p>Foi passado os valores da classe filho: {data.nome} - {data.idade} anos </p>
                    <a href="#" type="reset" onClick={clear}>Limpar Dados Filho no componente Pai</a>
                </>
            )}

        </>
    )
}


// Definindo o tipo do parametro que o componente recebe
Evento.propTypes = {
    numero: PropTypes.number.isRequired
};

// Setando um valor default, caso os campos definidos não forem passados
Evento.defaultProps = {
    numero: 0
}


export default Evento;