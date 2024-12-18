import React, { createContext, useState } from 'react';
import Practice2 from './Practice2';

export const CountContext = createContext();

const Practice = () => {
    const nameList = {
        "name": "Rakib",
        "age": "24",
    };
    const [count, setCount] = useState(0);
    return (
        <div>
            <CountContext.Provider value={{count, nameList}}>
                <Practice2></Practice2>
                <button onClick={() => setCount((count) => count + 1)}>
                    Practice count is {count}
                </button>
            </CountContext.Provider>
        </div>
    );
};

export default Practice;