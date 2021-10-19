import React from 'react';

import styles from"./styles.module.css"

const Label = (props) => {
    return (
        <label className={styles.label}> {props.children}</label>
    )
}

export default Label

