import axios from "axios"
import {useState} from "react"

const Search=({setInfo})=>{

    let [search,setSearch]=useState("")
    async function getImages(){

        try{
            let response=await axios.get("https://api.unsplash.com/search/photos",{
                params: {
                    query:search,
                },
                headers: {
                    Authorization:"Client-ID jePtdGTeura3p3z1hJsywpUcbUAzHViFlq1pOQnY2Tc"
                }
            })
            //console.log(response)
            setInfo(response.data.results)
        }catch(error){
            console.log(error)
        }
       
    }
    return(
        <div class="container">
             <input value={search} placeholder="Search for Images" onChange={(e)=>{
                setSearch(e.target.value)
             }}/>
             <button onClick={getImages}>Search</button>
        </div>
       
    )
}

export default Search