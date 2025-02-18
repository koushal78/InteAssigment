

const url = "https://jsonplaceholder.typicode.com/posts"

const fetchData = async ()=>{
   try {
   const responce = await fetch(url)
   const data = await responce.json()
   console.log(data)
   return data
    
   } catch (error) {
    console.log("error in the data fetching ",error.message)
    return [];
    
   }

}

fetchData()
export default fetchData
