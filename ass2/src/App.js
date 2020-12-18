import React, {Component} from 'react'
import {Char,Userinput,Useroutput} from './Char/Char'
import Validation from './Validation/validation'


class App extends Component{
  // 1> Initialize the state
  constructor (props){
    super(props);
    console.log('[App.js] Constructor')
  }
// 2> get state and props from index
 static getDerivedStateFromProps(props,state){
     console.log('[App.js] getDerivedStateFromProps',props,state);
     return state;
 }
// 3>Render componet run
// render () {
//     console.log("[App.js] render");}
// 4>componetDidMount Run
 componentDidMount(){
   console.log('[App.js] componentDidMount');
 }
 shouldComponentUpdate(nprops,nstate){
  console.log("shouldComponentUpdate",nprops,nstate)
  return true;
}
  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

 

  state={
    persons:[
      {id:"rhjj",name:"Raman",age:25},
      {id:"rjsks",name:"Raghav",age:24},
      {id:"rakks",name:"Vishul",age:23}
    ],
    otherState:"Check the name please",
    showPersons:false
  }

changeStateHandler = ()=>{
     this.setState({
      persons:[
        {id:"hsbh",name:"John",age:15}
      ],
    })
}

  render(){
    console.log("rendred")
    return (
      <div>
        <p>{this.state.persons[0].name}</p>
        <Char age={this.state.persons[0].age}></Char>
        <button onClick={this.changeStateHandler}>Change State</button>
        
      </div>
    );
  }
}

export default App;
