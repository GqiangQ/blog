import axios from 'axios'
import { useEffect, useState } from "react";
export const usePosts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('/api/v1/posts').then(res => {
      setPosts(res.data)
      setLoading(false)
    })
  },[]) // 加[] 表示第一次请求，不加表示每次都请求
  return {
    posts, loading
  }
}