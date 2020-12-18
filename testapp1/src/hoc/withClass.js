import React from 'react'

// First method
// const WithClass = props => (
// <div className={props.classes}>{props.children}</div>
// );

const withClass = (WrappedComponet,className) =>{
    
    return props => (
        
        <div className={className}>
            <WrappedComponet {...props}/>
        </div>
    )
}


export default withClass;

