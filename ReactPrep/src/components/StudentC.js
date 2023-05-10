import React,{Component} from 'react';
class StudentC extends Component {
    render(){
        return(
            <div style={{backgroundColor : "skyblue"}}>
                <h1>Name {this.props.name}</h1>
            </div>
        )
    }
}
export default StudentC;