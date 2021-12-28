import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect } from 'react'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  useEffect(()=>{
    axios.get('/api')
    .then((res)=> res.data)
    .then( data => console.log(data) )
  },[])

  return <p>Post: {pid}</p>
}

export default Post