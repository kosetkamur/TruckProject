import React from 'react';
import PlashWhyUs from "./PlashWhyUs/PlashWhyUs";
import "./WhyUs.sass";

const WhyUs = () => {
    let conditions = [
        {
            title: "Перевозим любые грузы"
        },
        {
            title: "Внимание к качеству"
        },
        {
            title: "Доставка груза в оптимальные сроки, по четкому графику"
        },
        {
            title: "Быстрая подача транспорта"
        },
        {
            title: "Страхование груза"
        },
        {
            title: "Наличный и безналичный расчёт (НДС/БЕЗ НДС)"
        },
    ]
    return (
        <div className="why-us-component">
            <div className="why-us-component__container">
                <div className="why-us-component__container_title">
                    Почему мы
                </div>
                <div className="why-us-component__container_plash">
                    {
                        conditions.map((data, index) => <PlashWhyUs data={data} key={ index }/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WhyUs;