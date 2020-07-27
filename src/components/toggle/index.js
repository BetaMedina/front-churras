import React,{useState} from 'react';

import './index.css';

function Toggle({change,nameInpt,inptValue}) {
  return <input type="checkbox" name={nameInpt} value={inptValue} onClick={()=>change(inptValue)} className="blue"/>;
}

export default Toggle;