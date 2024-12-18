import React, { useContext } from 'react';
import { CountContext } from './Practice';

const Practice2 = () => {
    const {count, namelist} = useContext(CountContext);
    return (
        <div>
            <button>countP2 incresed {count}</button>
        </div>
    );
};

export default Practice2;