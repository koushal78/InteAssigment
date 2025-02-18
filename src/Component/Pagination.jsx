
const Pagination = ({totalPost,postperPage,setCurrPage,currPage}) => {
  const pageNo = []
  for(let i = 0;i<Math.ceil(totalPost/postperPage);i++){
    pageNo.push(i)
  }
  const handleprev =()=>{
    
    if(currPage>1){

      setCurrPage(currPage-1)
    }
   

  }
  const handlenext =()=>{
    
    if(currPage<pageNo.length){

      setCurrPage(currPage+1)
    }

  }
   
  return (
    <div className="relative top-4">
      <div className="flex gap-8 text-2xl text-white justify-center">
      <button className="cursor-pointer"
      onClick={handleprev}
      
      >{'<'}</button>
       <p>{currPage}</p>
      <button className=" cursor-pointer"
      onClick={handlenext}
      
      >{'>'}</button>


      </div>
  
    </div>
  )
}

export default Pagination