import { useRouter } from "next/router"

const SpecificPostPage = () => {
  const router = useRouter()
  const postId = router.query['post-id']

  /*
  // this is probably how medium.com does it, no?
  useEffect(() => {
    const getPost = async () => {
      // boy-problems-acbad4bce1b3
      const response = await fetch(`https://my-remote-backend/api/posts/${postId}`, {
        method: "GET",
        ...
      })
      const data = await response.json()
      // ... do something with data
    }

    getPost()
  }, [])
  */

  return (
    <div>
      <h1>{postId}</h1>
      <p>Some random content here</p>
    </div>
  )
}

export default SpecificPostPage