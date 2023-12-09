import {useLocation, useParams} from "react-router-dom";


export const CheckParams=()=>{

    const params=useParams();
    const loc=useLocation();

    return(<>

        <h1>id : {params.id}</h1>
        <h5>{params.name}</h5>
        <p>
           host: {loc.hostname}
        </p>
        <p>
           protocol: {loc.protocol}
        </p>
        <p>
           origin: {loc.origin}
        </p>
        <p>
           href: {loc.href}
        </p>
        <p>
           path: {decodeURI(loc.pathname)}
        </p>
        </>)
}
