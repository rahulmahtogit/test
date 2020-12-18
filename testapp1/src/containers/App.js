import React, { Component } from 'react';
import Radium, {StyleRoot} from 'radium';
import styled from 'styled-components'


import classes from './App.module.css';
import Persons from '../componets/Persons/Persons';
import Cockpit from '../componets/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'



class App extends Component {
  constructor (props){
    super(props);
    console.log('[App.js] Constructor')
  }
  
  state={
    persons:[
      {id:"rhjj",name:"Raman",age:25},
      {id:"rjsks",name:"Raghav",age:24},
      {id:"rakks",name:"Vishul",age:23}
    ],
    otherState:"Check the name please",
    showPersons:false,
    showCockpit:true,
    changeCounter:0,
    authenticated:false
  }


 static getDerivedStateFromProps(props,state){
     console.log('[App.js] getDerivedStateFromProps',props,state);
     return state;
 }
 componentDidMount(){
   console.log('[App.js] componentDidMount');

  //  window.addEventListener('scroll',this.checkfun());
 }

 shouldComponentUpdate(nextProps,nextState){
  console.log("[App.js] shouldComponentUpdate",nextProps,nextState)
  return true;
}

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate");
    // window.addEventListener('scroll', console.log('DidUpdate'));
   
  
  }



deletePersonHandler = (personIndex)=>{
  // const persons = this.state.persons.slice()
  const persons = [...this.state.persons]
  persons.splice(personIndex,1)
  this.setState({
    persons:persons
  })
}

  nameChangeHandler = (event,id)=>{
    
    const personIndex = this.state.persons.findIndex(person => person.id === id)
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState((prevState,props)=>{
      return {persons:persons,
        changeCounter:prevState.changeCounter +1
      }
    })
  }

  togglePersonHandler = ()=>{
    const doesShow = this.state.showPersons
    this.setState({
      showPersons:!doesShow
    }
    )
  }
  loginHandler = ()=>{
  this.setState({authenticated:true})
  }
  componentWillUnmount(){
    console.log("[App.js] componentWillUnmount");
  }

  render () {
    console.log("[App.js] render");

    // inline CSS

    let persons = null;
  
    if(this.state.showPersons){
      persons = ( <div>
    <Persons
    persons={this.state.persons}
    clicked={this.deletePersonHandler}
    changed={this.nameChangeHandler}
    />
        </div>
        );

    }
    
    return (
        <Aux>
          <button onClick={()=>{this.setState({showCockpit: false})}}>Remove Cockpit</button>
          
          <AuthContext.Provider value={{authenticated:this.state.authenticated, login:this.loginHandler }}>
          {this.state.showCockpit?
            (<Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonHandler}
              login={this.loginHandler}
              />)
              :null}
         {persons}
          </AuthContext.Provider >
          
      
        </ Aux>
     
    );
  }
}
// return React.createElement('div',{className:'App'},React.createElement("h1",null,"Does"))

export default withClass(App,classes.App);


