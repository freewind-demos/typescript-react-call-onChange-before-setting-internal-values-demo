import React, { useState } from 'react';
import { Hello } from './Hello';

export const App = () => {
    const [value, setValue] = useState(0);

    const handleChange = (newValue: number) => {
        console.log('onChange called with:', newValue);
        setTimeout(() => {
            console.log('Now updating value to:', newValue);
            setValue(newValue);
        }, 1000);
    };

    return (
        <Hello
            value={value}
            onChange={handleChange}
        />
    );
};
