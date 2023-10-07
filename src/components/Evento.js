import { useState } from "react";
import Button from "./events/Button";
import ChildrenPassValueToEvent from "./events/ChildrenPassValueToEvent";


function Evento({numero}) {
    const callEvent = (event) => {
        console.log('Opa, fui ativado => Event ' + numero)
    }

    const [data, setData] = useState('');

    const childToParent = (childdata) => {
        // setData(childdata);
        console.info(`Info do evento Filho`)
        console.info(childdata)
    }

    return (
        <>
            <p>Clique para disparar um evento {numero}</p>
            <Button text="Ativar" event={callEvent}> </Button>

            <h3>Filho passa valor pro pai</h3>
            <ChildrenPassValueToEvent childToParent={childToParent}></ChildrenPassValueToEvent>
        </>
    )
}

export default Evento;