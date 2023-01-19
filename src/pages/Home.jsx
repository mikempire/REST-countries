import React, {useEffect, useState} from 'react';
import axios from "axios";
import CountryItem from "../components/CountreItem";
import Control from "../components/Control";
import Loader from "../components/Loader";


const Home = () => {
    const [countries, setCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterCountries, setFilterCountries] = useState(countries);

    const handleSearch = (search, region) => {
        let data = [...countries];

        if (region) {
            data = data.filter((country) => country.region.includes(region));
        }
        if (search) {
            data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
        }

        setFilterCountries(data);
    }

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v2/all')
                setCountries(response.data)
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData();
    }, [])

    if (isLoading) {
        return (
            <Loader/>
        )
    }

    return (
        <main className='container'>
            <Control onSearch={handleSearch}/>
            <div className='country-item container'>
                {
                    filterCountries.map((el) => <CountryItem
                        population={el.population}
                        capital={el.capital}
                        region={el.region}
                        image={el.flags.svg}
                        name={el.name}
                        key={el.numericCode}
                    />)
                }
            </div>
        </main>

    );
};

export default Home;

/*
const mickData = [
    {
        name: "Afghanistan",
        population: 40218234,
        region: "Asia",
        capital: "Kabul",
        flags: {
            svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }
    },
    {
        name: "Afghanistan",
        population: 40218234,
        region: "Asia",
        capital: "Kabul",
        flags: {
            svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }
    },
    {
        name: "Afghanistan",
        population: 40218234,
        region: "Asia",
        capital: "Kabul",
        flags: {
            svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }
    },
    {
        name: "Afghanistan",
        population: 40218234,
        region: "Asia",
        capital: "Kabul",
        flags: {
            svg: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
            png: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"
        }
    },
]

 */
