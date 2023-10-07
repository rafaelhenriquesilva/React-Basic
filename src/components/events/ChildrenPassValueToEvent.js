function ChildrenPassValueToEvent({childToParent}){
    const data = {
        nome: 'Rafael',
        idade: 26
    }
    return (
        <div>
            <button primary="true" onClick={() => childToParent(data)}>Clique no filho</button>
        </div>
    )
}

export default ChildrenPassValueToEvent;