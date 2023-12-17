import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data)
      }catch(err) {
        console.log(err)
      }
    };
    fetchData();
  }, [cat]);
    // const posts = [
    //     {
    //       id:1,
    //       title: "lorem in sfifgdbjhfgsjdf",
    //       desc: "lorem in sfifgdbjhfgsjdf",
    //       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb$w=1260@h=750&dpr=2"
    //     },
    //     {
    //       id:2,
    //       title: "lorem in sfifgdbjhfgsjdf",
    //       desc: "lorem in sfifgdbjhfgsjdf",
    //       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb$w=1260@h=750&dpr=2"
    //     },
    //     {
    //       id:3,
    //       title: "lorem in sfifgdbjhfgsjdf",
    //       desc: "lorem in sfifgdbjhfgsjdf",
    //       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb$w=1260@h=750&dpr=2"
    //     },
    //     {
    //       id:4,
    //       title: "lorem in sfifgdbjhfgsjdf",
    //       desc: "lorem in sfifgdbjhfgsjdf",
    //       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb$w=1260@h=750&dpr=2"
    //     },
    //   ]
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className='post' key={post.id}>
                <img src={`../upload/${post?.img}`} alt='Suggested Posts' />
                {/* <img src={Test} alt='Suggested Posts' /> */}
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}  
    </div>
  )
}

export default Menu
