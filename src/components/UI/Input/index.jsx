import React from 'react';
import "./styles.css"

const Input = (props) => {
    const {type} = props
    if (type) {
        return (
            <input {...props}type= {type} className={"input__",type} value = {props.value} />
        )
    }
    else {
        return (
            <input {...props}type="text" className={"input"} value = {props.value} />
        )
    }
}

export default Input

