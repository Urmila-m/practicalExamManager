import React, {Component} from 'react'

class Form extends Component{
    submitForm= (name, job)=>{
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
        // name.target.value= ""
        // job.target.value= ""

    }

    handleEvent= event=> {
        const {name, value}= event.target
        this.setState({
            [name]: value,
        })
        console.log(this.state)
    }

    constructor(props){
        super(props)

        this.initialState= {
            Name: "",
            Job: "",
        }

        this.state= this.initialState
    }

    render(){
        const {name, job}= this.state;

        return(
            <form>
                <label>Name</label>
                <input type= "text" name= "Name" value={name} onChange={this.handleEvent}/>
                <label>Job</label>
                <input type= "text" name= "Job" value={job} onChange={this.handleEvent}/>
                <input type="reset" value="Submit" onClick={this.submitForm}/>
            </form>
        );
    }
}

export default Form;
