import React, { FC, useEffect, useState } from 'react';
import './Hello.pcss';

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export const Hello: FC<Props> = ({ value, onChange }) => {
  const [count, setCount] = useState(value);

  // 当外部value变化时,重置内部状态
  useEffect(() => {
    console.log('useEffect: value changed to', value, ', updating count');
    setCount(value);
  }, [value]);

  const handleClick = () => {
    console.log('handleClick: current count is', count);
    // 先调用onChange
    console.log('handleClick: calling onChange with', count + 1);
    onChange(count + 1);
    // 然后重置内部状态
    console.log('handleClick: setting count to', count + 2);
    setCount(prev => prev + 2);
  };

  return (
    <div className={'Hello'}>
      <h1>State Management Demo</h1>
      <p>Internal count: {count}</p>
      <p>External value: {value}</p>
      <button onClick={handleClick}>
        Update Both (onChange then internal)
      </button>
    </div>
  );
};
