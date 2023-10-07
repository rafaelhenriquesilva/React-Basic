export default function DynamicList({ itens }) {
    return (
        <>
            <h3>Lista de tecnologias</h3>
            {itens.length > 0 ? (itens.map((item, index) =>
                <p key={index}>{item}</p>
            )) : (
                <p> Nemhuma tecnologia nova no momento</p>
            )


            }
        </>
    )
}