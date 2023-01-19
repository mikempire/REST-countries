import React from 'react';
import {useNavigate} from "react-router-dom";

const CountryItem = ({image, name, population, region, capital}) => {
    const navigate = useNavigate();

    function clickHandler() {
        navigate(`/country/${name}`)
    }

    return (
        <div className="item" onClick={clickHandler}>
            <img src={image} alt="" className='item__img'/>
            <div className="item__info">
                <p className='item__title'>{name}</p>
                <p><b>Population: </b>{population}</p>
                <p><b>Region: </b>{region}</p>
                <p><b>Capital: </b>{capital}</p>
            </div>
        </div>
    );
};

export default CountryItem;
