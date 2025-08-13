import { useEffect, useState } from "react";
import './exercise2.css'


export default function Exercise2Effect() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [size,setSize]=useState(25)

   
       const updateSize=()=>{setSize(prev=>prev+5)}
        
    

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.slice(0, 10));
                setLoading(false);
            })
            .catch((err) => {
                console.log("Error", err);
                setLoading(false);
            })

    }, [])
    if (loading) {
        return <div>Loading posts...</div>;
    }
    return (
        <>
            <div className="posts-container">{posts.map((post) => (<div className="post-card" ><div style={{fontSize:size+'px'}}><h3>{post.title}</h3><p>{post.body}</p> <button onClick={updateSize}>Grow</button></div></div>))}</div>
        </>
    )
}