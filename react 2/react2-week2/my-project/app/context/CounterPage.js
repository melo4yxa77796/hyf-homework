"use client";
import React from 'react';
import { CounterProvider } from './CounterContext'; 
import Counter from './Counter';

const CounterPage = () => {
    return (
        <CounterProvider>
            <Counter />
        </CounterProvider>
    );
};

export default CounterPage;
