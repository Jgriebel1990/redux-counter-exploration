import React from 'react';

const Counter = props => {
    return (
      <div>
        <h1 className='text-clr'>
            {props.count}
        </h1>
        <button className='btn-clr-1' onClick={() => props.decrementBy(props.input)}>decrease by</button>
        <button className='btn-clr-2' onClick={() => props.incrementBy(props.input)}>increase by</button>
        <button className='btn-clr-3' onClick={() => props.incrementBy(2)}>+2</button>
        <button className='btn-clr-4' onClick={() => props.decrementBy(2)}>-2</button>
      </div>
    );
}

export default Counter;