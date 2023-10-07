import styles from './List.module.css';
import Item from './Item'
function List() {
    return (
       <>
        <h2> My list</h2>
        <ul className={styles.tabela}>
            <Item marca="Ford" ano_lancamento={2023}/>
            <Item marca="Fiat" ano_lancamento={2024}/>
            <Item marca="Volkswagen" ano_lancamento={2025}/>
            <Item />
        </ul>
       </>
    );
} 

export default List;