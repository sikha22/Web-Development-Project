import { Component } from "react";

class Form extends Component
{
    initialState = {
        name:"",
        Work:""
    }

    state = this.initialState;

    handleChange = (event)=>{
        
        // console.log(event.target.value);
        const {name, value} = event.target
        this.setState({[name]:[value]})

    }

    submitForm = ()=>{
        // event.preventDefault();
        let character = this.state
        this.props.handleSubmit(character)
    }
    render(){
        return(
            <form>
                <label htmlfor="name">Name</label>
                <input
                type = "text"
                name = "name"
                id="name"
                onChange={this.handleChange} />
                
                <label htmlfor="work">Work</label>
                <input
                type = "text"
                name = "work"
                id="work"
                onChange={this.handleChange} />
                <input type="button" value = "Submit"  onClick={this.submitForm}/>

            </form>
        )
    }
}

export default Form;
