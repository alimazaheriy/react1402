import {Component} from "react";

export class Form extends Component{

    state={
        fname:'',
        lname:'',
        city:'',
        gender:''
    }

    updateValue=e=>{
        //const name=e.target.name;
        //const value=e.target.value;
        const {name,value}=e.target;
        const clone={...this.state};
        clone[name]=value;
        this.setState(clone)
    }

    render() {
        return(<>

            <form>
                <input type={"text"} name={"fname"} onInput={e=>this.updateValue(e)} placeholder={"FirstName"}/> {this.state.fname}
                <br/>
                <input type={"text"} name={"lname"} onInput={e=>this.updateValue(e )} placeholder={"LastName"}/> {this.state.lname}
                <br/>
                <label>City</label> {this.state.city}
                <select>
                    <option value=""> Kashan</option>
                    <option value=""> Natanz</option>
                    <option value=""> Tehran</option>
                    <option value=""> Isfahan</option>
                </select>
                <br/>
                <label>gender</label> {this.state.gender}
                <br/>
                <input name={"gender"} type={"radio"}/> Male
                <br/>
                <input name={"gender"} type={"radio"}/> Female

            </form>
        </>)
    }
}