import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context'


class Person extends Component {
    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;
    // //Ist way of ref
    // componentDidMount(){
    //     this.inputElement.focus();
    // }
      //2nd way of ref New Way
    componentDidMount(){
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated)
    }


    render(){
        return (
            <Aux>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated? <p>authenticated!!</p>:<p>Please Login First</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated? <p>authenticated!!</p>:<p>Please Login First</p>}
                <p onClick={this.props.click}>My name is {this.props.name} and i am {this.props.age} years old and hobbies is {this.props.children}</p>
              
                <input
                // ref={(inputEl) =>{this.inputElement = inputEl}} //Ist way of ref
                ref={this.inputElementRef} //2nd way of ref
                 type="text"
                 onChange={this.props.changed}
                  value={this.props.name} />

                  
            </Aux>
            // <div className={classes.Person}>  
        
            
        // </div>
        );
    }
}

// Add validation on Person props
Person.propTypes = {
click: PropTypes.func,
name: PropTypes.string,
age: PropTypes.number,
changed: PropTypes.func
};

export default withClass(Person,classes.Person);


