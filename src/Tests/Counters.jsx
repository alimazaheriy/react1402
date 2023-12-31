import {Component} from "react";
import {Counter} from "./Counter";

export class Counters extends Component{

    state={
        counters:[
            {count:10},
            {count: 5},
            {count: -2},
        ],
        inputValue:0,
        added:false
    }

    addCounter=()=>{
        const Counters=[...this.state.counters]
        Counters.push({count: this.state.inputValue});
        this.setState({counters:Counters})
    }

    updateValue=(e)=>{
        const {value:inputValue}=e.target;
        this.setState({inputValue});
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
        if (prevState.counters.length<this.state.counters.length)
        {
            this.setState({added:true})

            /*const counters=[...this.state.counters];
            counters.push({count: 10})
            this.setState()*/
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return(<>
            <h1>{this.state.added===true?'New Counter Added':'none'}</h1>
            <div>
                <input type="number" value={this.state.inputValue}
                       onInput={(e)=>this.updateValue(e)}/>
                <button onClick={()=>this.addCounter()}>Add New Counter</button>
            </div>

            <div>
                {
                    this.state.counters.map(c=><Counter value={c.count} />)
                }
            </div>

        </>)
    }
}