import React, { useContext, useState } from 'react'
import { questsContext } from '../context/questsContext';
import perguntas from '../data/questions';
import Question from './Question';

const FormQuestions = () => {
  const [question, setQuestion] = useState(0);
  const { setFinale, setAnswers, selected, setSelected } = useContext(questsContext);

  /** @param {Event} event*/
  function handleChangeQuest(event) {
    event.preventDefault();
    if (question < 3) setQuestion(question + 1);
    setAnswers((prev) => {
      return [...prev, perguntas[question].resposta === selected]
    });
    setSelected('')
  }

  function handleFinale(event) {
    event.preventDefault();
    setAnswers((prev) => {
      return [...prev, perguntas[question].resposta === selected]
    })
    setFinale(true);
  }

  return (
    <section>
      <form onSubmit={handleChangeQuest}>
        {<Question question={perguntas[question]} />}
        {
          question === 3
          ? <button type="button" disabled={!selected.length} onClick={handleFinale}>Finalizar</button>
          : <button type="submit" disabled={!selected.length}>Próxima</button>
        }
      </form>
    </section>
  )
}

export default FormQuestions;
