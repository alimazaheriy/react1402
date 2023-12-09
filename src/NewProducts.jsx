import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Joi from 'joi';
import {messages} from "./joi_translation";
import {useNavigate} from "react-router-dom";

export const NewProducts=()=>{

    const [product,setProduct]=useState({
        id:0,
        name:'',
        price:0,
        discount:0,
        quantity:0,
        image:'',
        code:'',
        description:''
    })

    const updateValues=(e)=>{
        const {name,value}=e.target;

        const p={...product};
        p[name]=value;
        setProduct(p);
    }
    const navigate=useNavigate()

    const save=(e)=>{
        e.preventDefault();

        const validateResult=validate();
        if (validateResult==false)
            return

        //save
        navigate('/counter',{replace:true})
    }

    const schema=Joi.object({
        code:Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .label('کد'),
        name:Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
            .label('نام'),
        quantity:Joi.number()
            .integer()
            .required(),
        price:Joi.string()
            .pattern(/^\d+$/)
            .min(0)
            .required()
            .label('قیمت'),
        description:Joi.string()
            .alphanum()
            .max(500)
            .required()
            .label('توضیحات'),
    })
    const validate=()=>{
        const result=schema.validate(product,{abortEarly:false,allowUnknown:true,messages:messages,errors:{language:"fa"}})
        console.log(result);

        let validate=true;
        if (result.error && result.error.details && result.error.details.length>0)
        {
            validate=false;
            const details=result.error.details;
            const errorMessages=details.map(error=> ({message:error.message,type:error.type,path:error.path[0]}));
            setErrors(errorMessages);
        }
        return validate;
    }

    const [errors,setErrors]=useState([]);

    const get=name=>{

        let value='';
        for (let i=0;i<errors.length;i++)
        {
            if(errors[i].path==name){
                value=errors[i].message;
                break
            }
        }
        return value;
    }

    return(
        <>
        <div className={"card"}>
           <div className={"card-header"}>
               <h1 className={"card-title"}>New Product</h1>
           </div>
            <div className={"card-body"}>

                {
                    errors && errors.length>0 &&
                <div className={"alert alert-danger"}>

                        <ul>
                            {errors.map(err=><li key={err.message}>{err.message}</li>)}
                        </ul>
                </div>
                }
                <form method={"post"} onSubmit={save}>
                    <div className={"form-group"}>
                        <lable>Code:</lable>
                        <input className={"form-control"} onInput={e=>updateValues(e)} type="text" name={"code"} value={product.code}/>
                        <small className={"text-danger"}>{get('code')}</small>
                    </div>

                    <div className={"form-group"}>
                        <lable>Name:</lable>
                        <input className={"form-control"} onInput={e=>updateValues(e)} type="text" name={"name"} value={product.name}/>
                        <small className={"text-danger"}>{get('name')}</small>
                    </div>

                    <div className={"form-group"}>
                        <lable>Price:</lable>
                        <input className={"form-control"} onInput={e=>updateValues(e)} type="number" name={"price"} value={product.price}/>
                    </div>

                    <div className={"form-group"}>
                        <lable>Discount:</lable>
                        <input className={"form-control"} onInput={e=>updateValues(e)} type="number" name={"discount"} value={product.discount}/>
                    </div>

                    <div className={"form-group"}>
                        <lable>Quantity:</lable>
                        <input className={"form-control"} onInput={e=>updateValues(e)} type="number" name={"quantity"} value={product.quantity}/>

                    </div>

                    <div className={"form-group"}>
                        <lable>Description:</lable>
                        <textarea className={"form-control"} onInput={e=>updateValues(e)} name={"description"} value={product.description} cols={80} rows={5}></textarea>
                    </div>


                    <div className={"form-group"}>
                        <button type={"submit"} className={"btn btn-primary"}>Save</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}