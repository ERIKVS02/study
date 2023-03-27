import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() =>{
        setTimeout(() =>{
            setCounter(counter + 1);
        }, 1000)
    },[counter])

    return (
        <div className={'counter'}>
            Counter: {counter}
        </div>
    );
};

export default Counter;