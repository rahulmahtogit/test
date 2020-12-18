import React, {useEffect,useRef,useContext} from 'react'

import classes from './Cockpit.module.css'
import AuthContext from '../../context/auth-context'


const Cockpit = (props) => {
  const toggleBtnRef = React.useRef(null);
  const authContext = useContext(AuthContext);
  

   useEffect(()=>{
     console.log('[Cockpit.js] useEffect')
    // //  http request
    //  setTimeout(() => {
    //    alert('Saved to Cloud!!')
    //  }, 1000);
    toggleBtnRef.current.click();
     return ()=>{
       console.log("[Cockpit.js] cleanup work in useEffect")
     }
   },[])


// Use for componetDidUnmount 
  //  useEffect(()=>{
  //   console.log('[Cockpit.js] 2nd useEffect')
  //   return ()=>{
  //     console.log("[Cockpit.js] cleanup work in 2nd useEffect")
  //   }
  // },[])
    //run when persons changes

    // CompoentDid mount in useEffect
    // Run single time initially

    // useEffect(()=>{
    //   console.log('[Cockpit.js] useEffect')
    //   setTimeout(() => {
    //     alert('Saved to Cloud!!')
    //   }, 1000);
    // },[])

   
    let assignedclasses = []
    let btnClass = '';
    if(props.showPersons){
        btnClass = classes.Red
    }
    if(props.personsLength <=7){
      assignedclasses.push(classes.red)  // classes = ['red']
    }
    if(props.personsLength <=5){
      assignedclasses.push(classes.bold)  // classes = ['red','bold']
  }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1> 
         <p className={assignedclasses.join(' ')}>This is really working</p>
         <button
          ref={toggleBtnRef}
          className={btnClass}
           onClick={props.clicked}>
         Toggle Name
         </button> 
        
         {<button onClick={authContext.login}>Login </button>}
        
        </div>
    );
}

export default React.memo(Cockpit);