import React from 'react';
import place from './Place.module.css';

const Place = ({Countrie, speak, selected})=>{
    return (
        <div className={place.edge + " " + selected}>
            <div className={place.where}>
                <h1>{Countrie}</h1>
            </div>
            <div className={place.used}>
                <p>{speak}</p>
            </div>
        </div>
    )
}
export default Place