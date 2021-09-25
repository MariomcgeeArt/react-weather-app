import {useState} from 'react'
import './Weather.css'


function Weather () {
    return (
        <div className='Weather'>
            <form>
                <input
                placeholder='Enter Zip' 
                />
                <button>Submit</button>

            </form>
        </div>

    )
}


export default Weather