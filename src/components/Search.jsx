import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import {GrFormClose} from 'react-icons/gr';

const Search = ({search, setSearch}) => {

    const cleanSearch = () => {
        setSearch('');
    }
    return (
        <label htmlFor="search" className='search__label'>
            <AiOutlineSearch/>
            <input type="text" id='search' className='search__input'
                   autoComplete="off"
                   placeholder='Введите название страны...'
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
            {
                search    &&         <GrFormClose onClick={cleanSearch}/>

            }
        </label>
    );
};

export default Search;
