
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogsData } from './data';
const Blog = () => {
    const {title} = useParams()
    const [bodyData,setBodyData] =useState("");
    useEffect(()=>{
        const blog = blogsData.filter((blog)=>blog.title===title);
        setBodyData(blog[0].body)
    
    },[])
    return (
        <div>
            <section>
                <h1>
                    {
                        title
                    }
                </h1>
                <p>
                    {
                        bodyData.slice(0,500)
                    }
                </p>
                <p>
                    {
                        bodyData.slice(501,5000)
                    }
                </p>
            </section>
        </div>
    );
};

export default Blog;