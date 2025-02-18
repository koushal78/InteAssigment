import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import fetchData from "../../Api/api"

const Details = () => {
  const { id } = useParams()
  const [post, setpost] = useState(null);


  useEffect(() => {
    // fetch data from api
    const getData = async () => {
      const data = await fetchData();
      setpost(data.find((p) => p.id === parseInt(id)))


    }
    getData();
  }, [id])
  // initilly post is empty 
  if (!post) {
    return <div className="bg-gradient-to-r from-slate-900 to-slate-700 flex justify-center items-center h-screen">

      <p className="text-xl text-center text-blue-700">Loading post ....</p>


    </div>
  }
  return (
    <div className=" bg-gradient-to-r from-slate-900 to-slate-700 ">


  
    <div className="h-screen flex  justify-center items-center ">

    <div className="w-[500px] shadow-2xl border-2 border-slate-500 rounded-md  flex flex-col gap-8 items-center px-4 py-2 bg-white">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-slate-600">{post.body}...</p>


<Link to={'/'}><button className="my-4 border-2 py-2 px-4 rounded-lg font-semibold text-green-600 hover:scale-120 duration-200 cursor-pointer">Go Back</button></Link>
    </div>
    </div>
    </div>
  )
}

export default Details