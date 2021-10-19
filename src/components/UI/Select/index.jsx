import React, { Children } from 'react';

import "./styles.css"


const Select = (props) => {
    let { options, type, defaultValue, value, onChange } = props
    if (options == undefined) {
        options = []
    }

    if (type) {
        return (
            <select value = {value} onChange = {e => onChange(e.target.value) } className={"select__" + type} id="cars" name="carlist" form="carform">
                <option disabled className={"option__" + type} value="none">{defaultValue}</option>
                {options.map((option) => { return <option className={"option__" + type} value={option.value}>{option.label}</option> })}
            </select>
        )
    }
    else return (
        <select className={"select"} id="cars" name="carlist" form="carform">
            {options.map((option) => { return <option className={"option__" + type} value={option.value}>{option.label}</option> })}
        </select>
    )

}

export default Select

