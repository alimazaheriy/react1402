import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.rtl.min.css';


export class Counter extends Component
{
    state={
        counter:this.props.value??0
    }

    add=()=>{
        let c =this.state.counter
        c=c+ (this.props.step??1)

        this.setState({counter:c})
    }

    sub=()=>{
        let c=this.state.counter
        c-=(this.props.step??1)
        this.setState({counter:c})
    }

    css=()=>{
        if(this.state.counter>0)
            return "badge bg-success"
        if(this.state.counter===0)
            return "badge bg-warning"

        return "badge bg-danger"
    }

    render(){
        return (
            <>
                <h1>{this.props.name}</h1>
                <strong>counter:</strong><span className={this.css()}>{this.state.counter}</span>
                <br/>
                <button className="btn btn-success" onClick={this.add}>Add</button>
                <button className="btn btn-danger" onClick={()=>this.sub()}>sub</button>
            </>

        )
    }
}