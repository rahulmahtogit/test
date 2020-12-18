import React, {PureComponent} from 'react';

import Person from './Person/Person';


class Persons extends PureComponent {
//   static getDerivedStateFromProps(props,state){
//     console.log('[Persons.js] getDerivedStateFromProps',props,state);
//     return state;
// }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log("[Persons.js] hello")
  //   // console.log("[Persons.js] shouldComponentUpdate")
   
  //   if(nextProps.persons !== this.props.persons || 
  //     nextProps.clicked !== this.props.clicked ||
  //      nextProps.changed !== this.props.changed)
  //      {
  //     console.log("hello",nextProps.persons,this.props.persons)
  //     return true;
  //   }else{
  //     return false;
  //   }
    
  // }
  
   getSnapshotBeforeUpdate (preProps,preState){
    console.log("[Persons.js] getSnapshotBeforeUpdate",preProps,preState)
    return null;
  }
    componentDidUpdate(){
      console.log("[Persons.js] componentDidUpdate");
    }

    // Run before your componet is removed
    componentWillUnmount(){
      console.log("[Persons.js] componentWillUnmount");
    }
  render(){
    return this.props.persons.map((person,index) =>{
      console.log('[Persons.js] rendering')
      return (<Person 
          click={()=> this.props.clicked(index)}
          changed={(event)=> this.props.changed(event,person.id)}
          name={person.name}
          age={person.age}   
          key={person.id}     
            />) 
      
      
  
    });
  }
}


export default Persons;