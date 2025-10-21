import react,{useState} from "react";
import axios from "axios";

function BookSearch({onResults}){
    const[query,setQuery]=useState("");
    const handleSearch= async()=>{
        if(!query) return;
        const res= await axios.get(`http://localhost:5000/api/books`);
        console.log(res.data);
        const filtered=res.data.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );
        onResults(res.data);
    };
    return(
        <div>
            <input
            type="text"
            placeholder="Search Books..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default BookSearch;