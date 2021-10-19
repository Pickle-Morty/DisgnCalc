import React, { useEffect, useState } from 'react';
import {
    m1_2_sm, m3_2_sm, m4_2_sm, m2_2_sm, m1_1_sm, m2_1_sm, m3_1_sm, m4_1_sm,
    n1_2_sm, n2_2_sm, n3_2_sm, n4_2_sm, n1_1_sm, n2_1_sm, n3_1_sm, n4_1_sm,
    l1_2_sm, l2_2_sm, l3_2_sm, l4_2_sm, l1_1_sm, l2_1_sm, l3_1_sm, l4_1_sm,
} from '../../assets/img/calc/';
import Input from '../UI/Input';
import Label from '../UI/Label';



import "./styles.css"

const CalcPage = () => {
    const [queryValue, setQueryValue] = useState({ furniture: 1, quality: 1, plan: 1 })
    const queryLexer = {
        quality: {
            1: "низкое",
            2: "высокое"
        },
        furniture: {
            1: "пусто",
            2: "крупная мебель",
            3: "мелкие предметы",
            4: "больше мелких предметов"
        },
        plan: {
            1: "да",
            2: "нет",
        }
    }

    const queryImg = {
        quality: {
            1: {
                furniture: {
                    1: [m1_1_sm, n1_1_sm, l1_1_sm],
                    2: [m2_1_sm, n2_1_sm, l2_1_sm],
                    3: [m3_1_sm, n3_1_sm, l3_1_sm],
                    4: [m4_1_sm, n4_1_sm, l4_1_sm],
                }
            },
            2: {
                furniture: {
                    1: [m1_2_sm, n1_2_sm, l1_2_sm],
                    2: [m2_2_sm, n2_2_sm, l2_2_sm],
                    3: [m3_2_sm, n3_2_sm, l3_2_sm],
                    4: [m4_2_sm, n4_2_sm, l4_2_sm],
                }
            }

        },

    }

    const price = {
        furniture: {
            1: 500,
            2: 1200,
            3: 1900,
            4: 2900,
        },
        quality: {
            1: 1,
            2: 1.5,
        },
        plan: {
            1: 0,
            2: 500,
        }
    }

    const [renderData, setRenderData] = useState(
        {
            furniture: "пусто",
            img: queryImg.quality[1].furniture[1],
            quality: "низкое",
            plan: " нет",
            summ: 1000
        }
    )

    const getSumm = () => {
        return (price.quality[queryValue.quality] * price.furniture[queryValue.furniture]) + price.plan[queryValue.plan]
    }


    useEffect(() => {
        setRenderData({
            ...renderData,
            furniture: queryLexer.furniture[queryValue.furniture],
            img: queryImg.quality[queryValue.quality].furniture[queryValue.furniture],
            quality: queryLexer.quality[queryValue.quality], plan: queryLexer.plan[queryValue.plan],
            summ: getSumm()
        })
    }, [queryValue])
    return (
        <div className="calc__page container">
            <h2 className="calc__page">Калькулятор</h2>
            <div className="row">
                <div className="col">
                    <Label >Качество</Label>
                    <Input type="range" value={queryValue.quality} type="range" min="1" max="2" name="" id="" onChange={(e) => setQueryValue({ ...queryValue, quality: e.target.value })} />
                    <span className="calc__item">{renderData.quality}</span>
                </div>
                <div className="col">
                    <Label >Количество мебели</Label>
                    <Input type="range" value={queryValue.furniture} type="range" min="1" max="4" name="" id="" onChange={(e) => setQueryValue({ ...queryValue, furniture: e.target.value })} />
                    <span className="calc__item">{renderData.furniture}</span>
                </div>
                <div className="col">
                    <Label >Есть план *.dwg</Label>
                    <Input type="range" value={queryValue.plan} type="range" min="1" max="2" name="" id="" onChange={(e) => setQueryValue({ ...queryValue, plan: e.target.value })} />
                    <span className="calc__item">{renderData.plan}</span>
                </div>
            </div>
            <div className="calc__result">
                <h3>Итого</h3>
                <Label>{renderData.summ + " сом"}</Label>
                <div className="row">


                    {renderData.img.map(img => {
                        return (
                            <div className="col">
                                <img src={img} alt="" className="calc__img" />
                            </div>
                        )

                    })}
                </div>

            </div>

        </div>
    )
}

export default CalcPage
