import {readRequest} from "../ApiRequest/ApiRequest.js";
import {useEffect, useState} from "react";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    (async ()=>{
      let res = await readRequest()
      setData(res)
    })()
  })
  return (
    <div>
      <ul>
        {
          data.map((item,i)=>{
            return(
                <li key= {i} >
                  {
                    item.ProductName
                  }
                </li>
            )
          })
        }
      </ul>

    </div>
  )
}

export default Home
