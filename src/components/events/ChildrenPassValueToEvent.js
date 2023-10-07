function ChildrenPassValueToEvent({childToParent}){
    const data = "Estes são os dados do componente filho para o componente pai."
    return (
        <div>
            <button primary onClick={() => childToParent(data)}>Clique no filho</button>
        </div>
    )
}

export default ChildrenPassValueToEvent;