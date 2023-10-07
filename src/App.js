
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import DynamicList from './components/DynamicList';




function App() {
  const itens = ['React', ' Vue', 'Angular'];

  return (
    <div className="App">
      <h1> Renderização de Listas </h1>
      <DynamicList itens={itens}/>
      <DynamicList itens={[]}/>
    </div>
  );
}

export default App;

/*

    <div className="App">
      <SayMyName name="Rafael"></SayMyName>
      <Pessoa 
                name='Rafael'
                age="26"
                profession='Desenvolvedor de Software'
      /> 
      
 */

/*
<div className="App">
<h1> Testando Eventos </h1>
<Evento numero={1}></Evento>
<Form />
</div>
 
*/ 