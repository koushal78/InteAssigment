import { useEffect, useState } from "react"
import fetchData from "../../Api/api"
import { Link } from "react-router-dom"
import Pagination from "../../Component/Pagination"
import Footer from "../../Component/Footer"


const Home = () => {
    const [posts,setpost] = useState([])
    const [search,setSearch] = useState("")
    const [currPage,setCurrPage] = useState(1)
    const[postperPage,setPostperPage] = useState(6)
    const [loading,setLoading] = useState(true);

  

    useEffect(()=>{
     const getdata = async()=>{
      setLoading(true)
        const data = await fetchData();

        setpost(data)
        setLoading(false)
     }

     getdata()

    },[])

    const lastPostIndex = currPage * postperPage
    const firstPostIndex = lastPostIndex - postperPage
    const currPost = posts.slice(firstPostIndex,lastPostIndex)
  
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen ">
      <div className="">      
        <h1 className="text-2xl font-bold text-white text-center py-2 ">Inter Assignment </h1>

        <div className="text-center">
          <input
           className="bg-white rounded-full py-2 w-[300px] my-4 outline-none pl-4 "
           type="text"
           placeholder="Search here.."
           value={search}
           onChange={(e)=> setSearch(e.target.value)}
          />
        </div>

      {loading?( <div> 

        <p className="text-2xl text-blue-700 text-center">Loading data ...</p>
      </div>) :
(<div className="flex gap-6 flex-wrap  ">
      {
        currPost.filter((post)=>(
          post.title.toLowerCase().includes(search.toLowerCase())
        )).map((post)=>(
            <div key={post.id} className=" w-[400px] h-[230px] mx-auto my-1 p-2 border- rounded shadow-lg bg-white flex flex-col items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-center">{post.title}</h2>
            <p className="text-slate-700 text-center">{post.body.slice(0, 100)}...</p>
            <Link to={`/item/${post.id}`} className="my-4 border-2 py-2 px-4 rounded-lg font-semibold text-purple-600 hover:scale-120 duration-200 cursor-pointer max-w-max ">Read More</Link>
          </div>
        ))
      }
      </div>
  )}
 {/* // btns  for the next page */}
  {
    loading ? (<></>) : (<>
    
    <Pagination 
     totalPost = {posts.length} 
     postperPage = {postperPage} 
     setCurrPage = {setCurrPage}
     currPage = {currPage}
     />
    
    </>)
  }    
      </div>
      <Footer/>
    </div>
  )
}

export default Home