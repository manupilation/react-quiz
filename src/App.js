import React, { useContext } from 'react';
import FormQuestions from './components/FormQuestions';
import { questsContext } from './context/questsContext';
import perguntas from './data/questions';

function App() {
  const { finale, answers } = useContext(questsContext);
  return (
    <main style={{fontFamily: "monospace"}}>
      {finale ? <h1>Você acertou {answers.filter(Boolean).length} perguntas de {perguntas.length}</h1> : <FormQuestions />}
    </main>
  );
}

export default App;
