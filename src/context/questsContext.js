import React, { useState } from 'react';

export const questsContext = React.createContext()

function QuestsContext({children}) {
  const [finale, setFinale] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState('');

  const value = {
    finale,
    answers,
    selected,
    setFinale,
    setAnswers,
    setSelected,
  }

  return (
    <questsContext.Provider value={value}>
      {children}
    </questsContext.Provider>
  )
}

export default QuestsContext;
