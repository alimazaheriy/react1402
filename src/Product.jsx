import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as service from "./dataService";

export class Product extends Component{

    state={
        Page:1,
        totalPage:1,
        pageSize:3,
        Products:[]
    }

    componentDidMount() {
        const Products=service.getData(this.state.Page);
        const totalPage=service.getTotalPageCount();
        this.setState({Products,totalPage});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.page!==this.state.Page)
         {
            const Products=service.getData(this.state.Page);
            this.setState({Products})
        }
    }

    getPages=()=>{
        let pages=[];
        for (var i=0;i<this.state.totalPage;i++)
        {
            pages.push(i+1);
        }

        return pages.map(p=><li key={p} onClick={()=>this.setState({Page:p})} className={"page-item" + (this.state.Page===p? " active":"")}>
            <a className="page-link" href="#" >{p}</a></li>)
    }

    nextPage=()=>{
        let page=this.state.Page;
        page++;
        if (this.state.totalPage<page)
            return
        this.setState({Page:page});
    }

    prevPage=()=>{
        let page=this.state.Page;
        page--;
        if (page<1)
            return
        this.setState({Page:page});
    }

    render() {

        return(
            <>
            <table className={"table table-bordered table-striped"}>

                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>TotalPrice</th>
                </tr>
                </thead>
                <tbody>

                {
                    this.state.Products.map((Product,index)=><tr key={Product.id}>
                        <td>{((this.state.pageSize*(this.state.Page-1))+ index+1)}</td>
                        <td>{Product.name}</td>
                        <td>{Product.price}</td>
                        <td>{Product.quantity}</td>
                        <td>{Product.quantity*Product.price}</td>
                    </tr>)
                }
                </tbody>
            </table>

                <div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">

                            <li className="page-item" onClick={this.prevPage}><a className="page-link" href="#" >Previous</a></li>

                            {
                                this.getPages()
                            }

                            <li className="page-item" onClick={this.nextPage}><a className=" page-link" href="#" >Next</a></li>
                        </ul>
                    </nav>
                </div>
            </>
        )
    }
}