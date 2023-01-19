import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const Infos = ({country}) => {
    const [countryNeighbor, setCountryNeighbor] = useState([]);
    const c = country.borders?.join(',') || '';
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${c}`);
                setCountryNeighbor(response.data)
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)

            }
        }
        fetchData();
    }, [country.borders]);

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    console.log('countryNeighbor', countryNeighbor)
    return (
        <div className="country__infos">
            <h3 className='country__title'>{country.name}</h3>
            <div className="country__info">
                <div className="">
                    <p>
                        Native Name:<span> {country.nativeName}</span>
                    </p>
                    <p>
                        Population: <span>{country.population}</span>
                    </p>
                    <p>
                        Region: <span>{country.region}</span>
                    </p>
                    <p>
                        Sub Region :<span>{country.subregion}</span>
                    </p>
                    <p>
                        Capital: <span>{country.capital}</span>
                    </p>
                </div>
                <div className="">
                    <p>
                        Top Level Domain: <span>{country.topLevelDomain[0]}</span>
                    </p>
                    <p>
                        Currencies: <span>{country.currencies[0].code}</span>
                    </p>
                    <p>
                        Languages: {
                        country.languages.map((el) => <span>{el.nativeName}, </span> )
                    }
                    </p>
                </div>
            </div>
            <div className="country__borders">
                Border Countries:
                {
                    countryNeighbor.length > 0 ? countryNeighbor.map((el) => <Link
                        className='country__border'
                        to={`/country/${el.name.common}`}
                    >{el.name.official} </Link> ) : <span> Соседей нет</span>
                }
            </div>
        </div>

    );
};

export default Infos;
