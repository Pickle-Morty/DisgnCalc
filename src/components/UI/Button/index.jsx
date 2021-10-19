import React, { Children } from 'react';

import "./styles.css"


const Button = (props) => {
    const { children, type } = props
    
    if (type) {
        return (
            <button {...props} className={props.className + " button__" + type}>{children}</button>
        )
    }
    else return (
        <button {...props} className={ props.className + " button"}>{children}</button>
    )

}

export { Button }

