import React, {useEffect, useState} from 'react';
import Search from "./Search";
import Select from "react-select";
import {logDOM} from "@testing-library/react";

const Control = ({onSearch}) => {
    const options = [
        {value: '', label: 'All'},
        {value: 'Africa', label: 'Africa'},
        {value: 'Americas', label: 'Americas'},
        {value: 'Asia', label: 'Asia'},
        {value: 'Europe', label: 'Europe'},
        {value: 'Oceania', label: 'Oceania'},
    ]

    const [search, setSearch] = useState('');
    const [region, setRegion] = useState('');

    useEffect(() => {
        onSearch(search,region )
    }, [search, region])

    const changeSelectHandler = (selectedOption) => {
        setRegion(selectedOption.value)
    }
    return (
        <div className="select-search">
            <Search search={search} setSearch={setSearch}/>
            <Select options={options} placeholder='Search by region' onChange={changeSelectHandler}/>
        </div>
    );
};

export default Control;
