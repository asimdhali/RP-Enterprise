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
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima id assumenda debitis nihil adipisci error quia atque possimus quam animi, ipsum mollitia dolores ab velit temporibus odit voluptatibus iste itaque repellat? Totam neque dolore iste est quisquam vitae, animi tempora doloribus voluptate, molestias laudantium nemo commodi officia, eos exercitationem ipsa? kdk kdk dkd kd 
                </p>
            </CountContext.Provider>
        </div>
    );
};

export default Practice;