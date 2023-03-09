import React from 'react'

const Option = ({children, checked, setSelected, value}) => {
  function handleChange({target}) {
    setSelected(target.value);
  }

  return (
    <p>
      <label>
        {children}
        <input
          type="radio"
          value={value}
          checked={checked === value}
          onChange={handleChange}
        />
      </label>
    </p>
  )
}

export default Option