import React, { useContext, useState } from 'react';
import { questsContext } from '../context/questsContext';
import Option from './Option';

const Question = ({question}) => {
  const {selected, setSelected} = useContext(questsContext);
  const {pergunta, options, id} = question;

  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((op, i) => (
        <Option
          key={i}
          id={id}
          checked={selected}
          setSelected={setSelected}
          value={op}
        >
          {op}
        </Option>
      ))}
    </fieldset>
  )
}

export default Question;
