import {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as service from "./dataService";

export const Product2=()=> {

    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(1)


    const pageSize = 3;

    const getPages = () => {
        let pages = [];
        for (var i = 0; i < totalPage; i++) {
            pages.push(i + 1);
        }

        return pages.map(p => <li key={p} onClick={() => setPage(p)}
                                  className={"page-item" + (page === p ? " active" : "")}>
            <a className="page-link" href="#">{p}</a></li>)
    }

    useEffect(() => {
        const products = service.getData(page);
        const totalPage = service.getTotalPageCount();
        setTotalPage(totalPage);
        setProducts(products);
    }, [page]);

    const nextPage = () => {
        let newPage = page;
        newPage++;
        if (totalPage < newPage)
            return
        setPage(newPage);
    }

    const prevPage = () => {
        let newPage = page;
        newPage--;
        if (newPage < 1)
            return
        setPage(newPage);
    }

    return (
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
                    products &&
                    products.length>0 &&
                    products.map((Products, index) => <tr key={Products.id}>
                        <td>{((page-1) * pageSize + index+1)}</td>
                        <td>{Products.name}</td>
                        <td>{Products.price}</td>
                        <td>{Products.quantity}</td>
                        <td>{Products.quantity * Products.price}</td>
                    </tr>)
                }
                {
                    (!products ||
                    products.length===0) &&
                    <tr>
                        <td style={{textAlign:"center"}} colSpan={5}>No Data</td>
                    </tr>
                }
                </tbody>
            </table>

            <div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">

                        <li className="page-item" onClick={prevPage}><a className="page-link" href="#">Previous</a></li>

                        {
                            getPages()
                        }

                        <li className="page-item" onClick={nextPage}><a className=" page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}