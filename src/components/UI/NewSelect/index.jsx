import React from 'react';

import "./styles.css"

const NewSelect = ({value, onChange, options}) => {
    return (
      <select value = {value} onChange ={ e => onChange(e.target.value)} id="" className="newSelect">
          {options.map(option => {
              return (
                <option value={option.value} className="newSelect__option">{option.label}</option>
              )
          })}
          
      </select>
    )
}

export default NewSelect

