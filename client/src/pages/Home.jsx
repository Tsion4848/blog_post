import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([])

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data)
      }catch(err) {
        console.log(err)
      }
    };
    fetchData();
  }, [cat]);
  // const posts = [
  //   {
  //     id:1,
  //     title: "lorem in sfifgdbjhfgsjdf",
  //     desc: "lorem in sfifgdbjhfgsjdf",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb$w=1260@h=750&dpr=2"
  //   },
  //   {
  //     id:2,
  //     title: "lorem in sfifgdbjhfgsjdf",
  //     desc: "lorem in sfifgdbjhfgsjdf",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb$w=1260@h=750&dpr=2"
  //   },
  //   {
  //     id:3,
  //     title: "lorem in sfifgdbjhfgsjdf",
  //     desc: "lorem in sfifgdbjhfgsjdf",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb$w=1260@h=750&dpr=2"
  //   },
  //   {
  //     id:4,
  //     title: "lorem in sfifgdbjhfgsjdf",
  //     desc: "lorem in sfifgdbjhfgsjdf",
  //     img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb$w=1260@h=750&dpr=2"
  //   },
  // ]
  
  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }
  
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className='img'>
              <img src={`../upload/${post.img}`} alt="posts" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>                  
              </Link>
              <p>{getText(post.desc)}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
