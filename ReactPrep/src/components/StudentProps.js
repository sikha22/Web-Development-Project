import React from 'react';
function StudentProps(props){
    console.log(props)
    return(
        <div style={{backgroundColor : "skyblue"}}>
            <h1>Hello {props.name}</h1>
            <h2>Email : {props.email}</h2>
        </div>
    )
}
export default StudentProps;