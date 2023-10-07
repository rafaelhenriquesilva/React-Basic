
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';



function App() {
  return (
    <div className="App">
      <h1> Condicional </h1>
      <Condicional></Condicional>
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