import React from 'react';

import styles from "./styles.module.css"

const Textarea = (props) => {
    return (
        <textarea  cols="30" rows="10" className={styles.textarea}>{props.textarea}</textarea>
    )
}

export default Textarea

