import {useState} from "react"
import Search from "./components/Search.js"
import SearchApi from "./components/SearchApi.js"

const App=()=>{

    let [info,setInfo]=useState([])


    return(
        <div>
                 <Search setInfo={setInfo}/>
                 <SearchApi images={info}/>
        </div>
    )
}

export default App