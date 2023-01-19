import React from 'react';
import {ClipLoader} from "react-spinners";

const Loader = () => {
    return (
        <div className='loader'>
            <ClipLoader
                color={'black'}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loader;
