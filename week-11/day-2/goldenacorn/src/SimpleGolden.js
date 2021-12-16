import React from 'react';
import { useState,useEffect } from 'react';
import Button from './Button';
import Display from './Display';
import App from './App';

function SimpleGolden() {
  const [count, setCount] = useState(0);

  function buyOne() {
    setCount(count +1);
  }

  function eatOne() {
    if(count > 0) {
      setCount(count -1);
    } else {
      setCount(0);
    }
  }

  let keyDownFunciton = (event) => {
    if(event.key === 'ArrowUp') {
        //setCount(count +1);
        buyOne();
    } else if(event.key === 'ArrowDown') {
      /*  if(count> 0) {
          setCount(count -1);
        } else {
         setCount(0);
        }
       */
      eatOne(); 
    }
  };

  useEffect(() => {
    document.onkeydown = keyDownFunciton;
  })


  return (
    <div>
      <App />
      <h2>Golden Application with states</h2>
      <Button handleClick={buyOne} label="Buy one" />
      <Display>
          <p>{count}</p>
        </Display>
      <Button handleClick={eatOne} label="Eat one" ></Button>
    </div>
  )
}


export default SimpleGolden;
