import {client} from "./AppAxios";
export const newProduct=async (product,callback)=>{
    const formData=new FormData();
    formData.append("code",product.code);
    formData.append("name",product.name);
    formData.append("price",product.price);
    formData.append("discount",product.discount);
    formData.append("quantity",product.quantity);
    formData.append("description",product.description);
    formData.append("image",product.image);

    const startTime=new Date();

    return await client.post('/products',formData,{
        contentType:'multipart/form-data',
        onUploadProgress:e=>{
            console.log(e);

            const {loaded,total}=e;

            const progress=loaded*100/total;
            const elapsedTime=(((new Date())-startTime)/1000);
            const uploadSpeed=loaded/elapsedTime;
            const remainingTime=total/uploadSpeed - elapsedTime;

            const amar={
                progress,
                remainingTime,
                uploadSpeed,
                elapsedTime,
                loaded,
                total
            }

            callback(amar);
            console.log(amar)
        }
    })
}

export const getProducts=async ()=>{
    return await client.get('/products')
}

export const deleteProducts=async (name)=>{
    return await client.delete('/products/' + name)
}

export const getImage=async ()=>{
    return await client.get('/images')
}
