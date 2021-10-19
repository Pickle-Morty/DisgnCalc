import React from 'react';

import "./styles.css"

const Modal = ({children, visible, setVisible}) => {
    let rootClass = "modal__filter"
    if(visible) {
        rootClass = rootClass + " active"
    }
    return (
        <div className={rootClass} onClick ={() => setVisible(false)} >
            <div className="modal__box" onClick ={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal

