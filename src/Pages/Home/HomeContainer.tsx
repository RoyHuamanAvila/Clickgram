import { useEffect, useState } from 'react'
import Home from './HomeView'
import { PostProps } from '../../interfaces'
import axios from 'axios';

const HomeContainer = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const handleGetPosts = async () => {
    const response = await axios.get(`http://localhost:3000/post`);
    const data = await response.data;

    console.log(data)
    setPosts(data);
  }

  useEffect(() => {
    handleGetPosts();
  }, [])

  return <Home posts={posts} />
}

export default HomeContainer
