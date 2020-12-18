import React from 'react'

const Validation = (props)=>{
  return(
    <div>
        <input type="text" onChange={props.changed}></input>
  <p>{props.len}</p>
    </div>
  );
}

export default Validation;