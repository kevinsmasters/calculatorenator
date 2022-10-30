import {useState} from 'react';
import { CalcButton } from './CalcButton';

import './CalcWrap.scss';
const theButtons = [
    {
      label: 'AC',
      id: 'clear', 
      size: 'big'
    },
    {
      label: '/',
      id: 'divide'
    },
    {
      label: '*',
      id: 'multiply'
    },
    {
      label: '7',
      id: 'seven'
    },
    {
      label: '8',
      id: 'eight'
    },
    {
      label: '9',
      id: 'nine'
    },
    {
      label: '-',
      id: 'subtract'
    },
    {
      label: '4',
      id: 'four'
    },
    {
      label: '5',
      id: 'five'
    },
    {
      label: '6',
      id: 'six'
    },
    {
      label: '+',
      id: 'add'
    },
    {
      label: '1',
      id: 'one'
    },
    {
      label: '2',
      id: 'two'
    },
    {
      label: '3',
      id: 'three'
    },
    {
      label: '0',
      id: 'zero',
      size: 'big'
    },
    {
      label: '.',
      id: 'decimal'
    },
    {
      label: '=',
      id: 'equals',
      size: 'tall'
    }
  ];

function CalcWrap() {
    const [display, setDisplay] = useState('0');
    const [operation, setOperation] = useState('');
    const [egg, setEgg] = useState(false);
    return (
        <div id="calcBox" className={egg ? 'birds' : null}>
            <div id="functionBox">{operation}</div>
            <div id="display">{display}</div>
            <div id="keyPad">
            {theButtons.map(button => (
           <CalcButton 
             button={button} 
             operation={operation} 
             setOperation={setOperation} 
             setDisplay={setDisplay} 
             display={display}
             setEgg={setEgg}
           />
          )
        )}
            </div>
            <div id="logo">
                <img 
                    src="https://static.wikia.nocookie.net/villains/images/4/49/Doofenshmirtzlogo.png" 
                    alt="Calculatorenator" 
                />
            </div>
        </div>
    )
}

export default CalcWrap;