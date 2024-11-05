
import React from 'react';
import { useCounter } from './CounterContext';

const Counter = () => {
    const { state, dispatch } = useCounter();

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Counter: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>INCREMENT+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>DECREMENT-</button>
        </div>
    );
};

export default Counter;

