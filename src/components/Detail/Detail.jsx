import React from 'react';
import "./Detail.sass";

const Detail = () => {
    return (
        <div className="detail-component">
            <div className="detail-component__container">
                <div className="detail-component__container_left">
                    <p className="detail-component__container_left__title">
                        Генеральный директор:
                    </p>
                    <p className="detail-component__container_left__subtitle">
                        Завадовский Денис Николаевич
                    </p>
                    <p className="detail-component__container_left__title">
                        Юридический адрес:
                    </p>
                    <p className="detail-component__container_left__subtitle">
                        125284, г. Москва, вн.тер. г.муниципальный округ Хорошевский, Хорошевское шоссе., д,38, помещ. 506,
                    </p>
                </div>
                <div className="detail-component__container_right">
                    <p className="detail-component__container_right__text">
                        <strong className="detail-component__container_right__text_strong">Факт.адрес:</strong> МО, г. Химки, ул. Панфилова 19с1
                    </p>
                    <p className="detail-component__container_right__text">
                        <strong className="detail-component__container_right__text_strong">ИНН/КПП:</strong> 9714007689/771401001
                    </p>
                    <p className="detail-component__container_right__text">
                        ООО «ПТК» является дочерним по отношению к ООО «Молоко»
                    </p>
                    <p className="detail-component__container_right__text">
                        <strong className="detail-component__container_right__text_strong">ИНН/КПП:</strong> 7731304818/773101001
                    </p>
                    <p className="detail-component__container_right__text">
                       <strong className="detail-component__container_right__text_strong">ОГРН:</strong> 1167746089994
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Detail;