import {Component} from "react";

export class List extends Component{
    state={
        notes:['apple','orange','banana','rice','kiwi'],
        value:'test'
    }

    updatevalue=(event)=>{
        const mystate={...this.state};
        mystate.value=event.target.value
        this.setState(mystate);
    }

    Add=()=>{
        const mystate={...this.state};
        mystate.notes.push(mystate.value);
        this.setState(mystate)
    }

    render() {
        return(
            <>
                <input type={"text"} value={this.state.value}
                       onInput={event => this.updatevalue(event)
                }/>
                <button onClick={this.Add}>Add</button>
                    <ul>
                        {
                            this.state.notes.map(n=><li>{n}</li>)
                        }
                    </ul>
            </>
        )
    }
}