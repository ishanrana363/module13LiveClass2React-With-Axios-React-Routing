import "../assets/css/style.css"
import { useState } from 'react';
import { blogsData } from './data';
import { Link } from 'react-router-dom';

const Blogs = () => {
    const [data,setData] = useState(blogsData);
    const truncateString = (str,num) =>{
        if(str.length>100){
            return str.slice(0,num) + "...."
        }
    }
  return (
    <div>
        <section className='blogsData'  >
            {
                data.map((item,id)=>{
                    const {title,body} = item
                    return(
                        <div className="dataList"  key={id} >
                            <article  >
                                <h1 className="title" >
                                    {title}
                                </h1>
                                <p className="body" >
                                    {
                                        truncateString(body,100)
                                    }
                                </p>
                            </article>
                            <Link to={title}>See More</Link>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default Blogs
