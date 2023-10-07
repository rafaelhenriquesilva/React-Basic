import styles from './Pessoa.module.css'
import List from './List'
function Pessoa({name, age, profession}){
    

    return <div className={styles.fraseContainer}>
        <h4>Nome: {name}</h4>
        <h4>Idade: {age}</h4>
        <h4>Profissão: {profession}</h4>

        <List />
    </div>
}

export default Pessoa