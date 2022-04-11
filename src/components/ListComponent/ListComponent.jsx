import React, { useEffect, useState } from 'react';
import { FixedSizeList } from 'react-window';

// Данные
// import apps from '../../data/NeRelog_apps2000.json';
import apps from '../../data/NeRelog_apps5000.json';
// import clients from '../../data/NeRelog_clients2000.json';
import clients from '../../data/NeRelog_clients5000.json';

const listItem = ({ index, style }) => {
    const companyName = clients.find(client => client.id === apps[index].client_id)?.name || '';
    const companyPhone = clients.find(client => client.id === apps[index].client_id)?.phone || '';

    return (
        <div className="list-item" style={style}>
            <div className="list-item__title">
                <b>Компания: </b>
                <br />
                {companyName}
            </div>
            <div className="list-item__type">
                <b>Тип:</b> {apps[index].type === 'pickup' ? 'Забор' : 'Доставка'}
            </div>
            <div className="list-item__price">
                <b>Цена:</b> {apps[index].price}тг.
            </div>
            <div className="list-item__phone">
                <b>Телефон:</b> <a href={`tel:+7${companyPhone}`}>+7{companyPhone}</a>
            </div>
        </div>
    );
};

const ListComponent = () => {
    // console.log(listName);
    const [heightWindow, setHeightWindow] = useState(document.documentElement.clientHeight);

    useEffect(() => {
        window.addEventListener('resize', function () {
            if (window.innerWidth < 767) {
                setHeightWindow(document.documentElement.clientHeight - 200);
            } else setHeightWindow(document.documentElement.clientHeight);
        });
    }, []);

    return (
        <div className="list">
            <div className="list-header">Заявки:</div>
            <FixedSizeList height={heightWindow} itemSize={180} itemCount={apps.length}>
                {listItem}
            </FixedSizeList>
        </div>
    );
};

export default ListComponent;
