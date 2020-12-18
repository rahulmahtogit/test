import React, {useEffect} from 'react'

const Char = (props)=> {
    useEffect(()=>{
   console.log("UseEffect")
    })

    return (
        <div>
            <p>{props.age}</p>      
        </div>
    
    );

}

const Userinput = (props)=> {
    console.log("hel")
    return (
        <div>
        <input type="text" onChange={props.change} value={props.currentName}></input>    
      
        </div>
    
    );

}

const Useroutput = (props)=> {
    return (
        <div>
          <p>{props.username}</p>

        </div>
    
    );

}

export {Char,Userinput,Useroutput} ;