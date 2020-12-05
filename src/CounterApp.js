import React,{ useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {

    const [counter, setCounter ] = useState( value ); // []
    

    //handleAdd
    const handleAdd =()=>{ 
        //SetCounter( counter + 1 );
        setCounter ( (c)=> c+1);
    }

    const handleSubtract =()=>{ 
        //SetCounter( counter + 1 );
        setCounter ( counter -1 ) 
    
    }

    const handleReset =()=>{ 
        //SetCounter( counter + 1 );
        setCounter ( value )
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter}</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset}>Reset</button>
            <button onClick={ handleSubtract }>-1</button>            
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
