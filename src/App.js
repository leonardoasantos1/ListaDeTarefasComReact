import { useState } from 'react';
import './App.css';

function App(){
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([]);

  function handleRegister(e){
    e.preventDefault();
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return(
    <div class="container">
      <form onSubmit={handleRegister}>
        <label><h1>Lista de tarefa</h1></label><br/>
        <input 
          placeholder="Digite uma tarefa" 
          value={input}
          onChange={ (e) => setInput(e.target.value) }
        /><br/>
        <button type="submit">Registrar</button>
      </form>
      <br/><br/>
      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

