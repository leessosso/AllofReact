import React, {useReducer} from 'react'

export default function Reducer() {
    const initialState = {count : 0};
    const [state, dispatch] = useReducer(reducer, initialState)

    function reducer(state, action) {
        switch(action.type){
            case 'reset':
                return initialState;
            case 'increment':
                return { count : state.count + 1};
            case 'decrement':
                return { count : state.count - 1};
            default:
                throw new Error();

        }
    }

    return (
        <div>
            Reducer Count: {state.count}
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}
