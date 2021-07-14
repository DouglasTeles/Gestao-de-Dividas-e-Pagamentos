import React from 'react'

function Inputs({title, type, state, setState}) {
    return (
        <div className="input-field">
              <label for={title}>{title}</label>
              <input
                id={title}
                type={type}
                value={state}
                onChange = {setState}
              ></input>
            </div>
    )
}

export default Inputs
