

const SearchApi=({images})=>{


    return(
        <div class="images"> 
            {
                images.map((value)=>(
                <img src={value.urls.small} alt="Vamsi"/>
                ))
            }
        </div>
    )
}

export default SearchApi