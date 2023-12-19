// to create instance of axios
import axios from 'axios';

export const commonAPI = async (htttpMethod, url,reqBody)=>{
    let reqConfig= {
        method:htttpMethod,
        url:url,
        data:reqBody,
        Headers:{
            "content-Type": "application/json"
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result;
    }).catch((err)=>{
        return err;
    })
}