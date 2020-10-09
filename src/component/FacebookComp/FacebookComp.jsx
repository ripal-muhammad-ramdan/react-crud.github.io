import React from 'react';
import './FacebookComp.css';

const FacebookComp = (props) => {
    return(
        <div className='facebook-wrapper'>
            <div className='thumbnail'>
                <img src="https://tse1.mm.bing.net/th?id=OIP.3NY9e44JZcIczGsJXS-fkgHaJ4&pid=Api&P=0&w=300&h=300" alt="Kirito"/>
            </div>
            <p className='tittle'>{props.name}</p>
            <p className='desc'>{props.tipe}</p>
        </div>
    )
}

export default FacebookComp;