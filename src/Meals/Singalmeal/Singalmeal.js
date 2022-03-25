import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Singalmeal.css'

const Singalmeal = (props) => {
    const { strMealThumb, strMeal, strInstructions, idMeal } = props.singalmeal
    const { handlecart } = props
    // console.log()
    return (
        <div className='singal-meal'>
            <img src={strMealThumb} alt="" />
            <div className='singal-meal-info'>
                <h2>Name:{strMeal}</h2>
                <h3>strId:{idMeal}</h3>
                <p>Instruction:{strInstructions.slice(0, 100)}</p>
            </div>
            <button className='btn' onClick={() => handlecart(strMeal)}>
                <p><FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon> know details</p>
            </button>
        </div>
    );
};

export default Singalmeal;