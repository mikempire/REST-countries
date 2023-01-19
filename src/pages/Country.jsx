import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Infos from "../components/Infos";
import Loader from "../components/Loader";

const Country = () => {
    const [country, setCountry] = useState([]);
    const {name} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v2/name/${name}`)
                setCountry(response.data[0])
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [name])


    if (isLoading) {
        return (
            <Loader/>
        )
    }
    return (
        <main className='container one-country'>
            <div className="return">
                <a className='country__btn' onClick={() => navigate(-1, { replace: true })}>Назад</a>
            </div>
            <div className='country container'>
                <img src={country.flags.svg} alt="" className='country__img'/>
                <Infos country={country} isLoading={isLoading}/>
            </div>
        </main>
    );
};

export default Country;
