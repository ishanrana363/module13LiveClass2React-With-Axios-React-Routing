import  {useState} from 'react';
import {createData} from "../ApiRequest/ApiRequest.js";
import {useNavigate} from "react-router-dom";
import "../assets/css/from.css"
const Product = () => {
    const [value ,setValue] = useState({
        "Img":"",
        "ProductCode":"",
        "ProductName":"",
        "Qty":"",
        "TotalPrice":"",
        "UnitPrice":""
    })
    const {Img,ProductCode,ProductName,Qty,TotalPrice,UnitPrice} = value
    const handleInputvalue = (key,value)=>{
        setValue(prevState => ({
            ...prevState,
            [key]:value
        }))
    }
    const navigate = useNavigate()
    const submit = async (e) =>{
        e.preventDefault()
        if(Img===""){
            alert("Img missing? Please enter Img !")
        }else if(ProductCode===""){
            alert("ProductCode missing? Please enter ProductCode !")
        }else if(ProductName===""){
            alert("ProductName missing? Please enter ProductName !")
        }else if(Qty===""){
            alert("Qty missing? Please enter Qty !")
        }else if(TotalPrice===""){
            alert("TotalPrice missing? Please enter TotalPrice !")
        }else if(UnitPrice===""){
            alert("UnitPrice missing? Please enter UnitPrice !")
        }
        else {
            let res = await createData(value)
            setValue(res)
            navigate("/")
        }
    }
    return (
        <div className= "product" >
            <form className= "productValue" >
                <div className= "inputValue" >
                    <label htmlFor= "Img" >Img</label>
                    <input onChange={(e)=>{handleInputvalue("Img",e.target.value)}}
                        type= "text" value={Img} id= "Img" className= "Img" />
                </div>
                <div className= "inputValue" >
                    <label htmlFor= "ProductCode" >ProductCode</label>
                    <input onChange={(e)=>{handleInputvalue("ProductCode",e.target.value)}}
                        type= "text" value={ProductCode} id= "ProductCode" className="Img" />
                </div>
                <div className= "inputValue" >
                    <label htmlFor= "ProductName" >ProductName</label>
                    <input onChange={(e)=>{handleInputvalue("ProductName",e.target.value)}}
                        type= "text" value={ProductName} id= "ProductName" className="Img" />
                </div>
                <div className= "inputValue" >
                    <label htmlFor= "Qty" >Qty</label>
                    <input onChange={(e)=>{handleInputvalue("Qty",e.target.value)}}
                        type= "text" value={Qty} id= "Qty" className="Img" />
                </div>
                <div className= "inputValue" >
                    <label htmlFor= "TotalPrice" >TotalPrice</label>
                    <input onChange={(e)=>{handleInputvalue("TotalPrice",e.target.value)}}
                        type= "text" value={TotalPrice} id= "TotalPrice" className="Img" />
                </div>
                <div className= "inputValue" >
                    <label htmlFor= "UnitPrice" >UnitPrice</label>
                    <input onChange={(e)=>{handleInputvalue("UnitPrice",e.target.value)}}
                        type= "text" value={UnitPrice} id= "UnitPrice" className="Img" />
                </div>
                <div className= "inputValue" >
                    <button onClick={submit} type= "submit" >Create Product</button>
                </div>
            </form>
        </div>
    );
};

export default Product;






























































