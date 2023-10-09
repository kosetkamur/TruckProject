import React from 'react';
import Сondition from "./Сondition/Сondition";
import "./Сonditions.sass";
import Title from "../Title/Title";

const Сonditions = () => {
    let conditions = [
        {
            title: "Логистика по всей РФ и СНГ",
            subtitle: "Предоставляем услуги логистики по всей России и странам СНГ, с собственной транспортной сетью"
        },
        {
            title: "Удобная модель сотрудничества",
            subtitle: "Электронный документооборот значительно упрощает и ускоряет обмен документами и расчеты с контрагентами"
        },
        {
            title: "Доставка в срок",
            subtitle: "Имеем развитую сеть наработанных маршрутов, которые позволяют доставлять груз в срок\n"
        },
    ]
    return (
        <div id="conditions">
            <Title title={"Условия"} />
            <div className="conditions-component">
                {
                    conditions.map((data, index) => <Сondition data={ data } num={ index } key={ index } />)
                }
            </div>
        </div>
    );
};

export default Сonditions;