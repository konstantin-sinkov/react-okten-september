import React from 'react';

const CounterItem = ({counterValue, dispatch, id}) => {
    return (
        <div>
            <div>{counterValue}</div>
            <div>
                {/*Pass id of CounterItem to reducer as action.payload*/}
                <button onClick={() => dispatch({type: '+', id: id})}>+ 1</button>
                <button onClick={() => dispatch({type: '-', id: id})}>- 1</button>
                <button onClick={() => dispatch({type: 'RESET', id: id})}>RESET</button>
            </div>
        </div>
    );
}

export default CounterItem;