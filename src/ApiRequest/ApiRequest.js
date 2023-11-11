import axios from "axios"


const baseUrl = "https://crud.teamrabbil.com/api"
export const  readRequest = async () => {
    let res = await axios.get(baseUrl + "/v1/ReadProduct")
    return res.data["data"]
}

export const createData = async (jsonBody) =>{
    let res = await axios.post(baseUrl+"/v1/CreateProduct",jsonBody)
    return res.data["status"]
}