import React from 'react';

import "./styles.css"

const TestComponent = () => {
    return (
        <div className="test__row">
            <div className="test__col">
                <div className="test__text">asdasda</div>
                <div className="test__valuu-bold">0213Et</div>
                <div className="test__value-grey">123123$</div></div>
                <span className="line-v"></span>
            <div className="test__col">
                <div className="test__text">asdasda</div>
                <div className="test__box">
                    <div className="test__item">
                        3
                        <div className="test__time"> Hours</div>
                    </div>
                    <div className="test__item">
                        13
                        <div className="test__time">Minutes</div>
                    </div>
                    <div className="test__item">
                        4
                        <div className="test__time">Second</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestComponent

